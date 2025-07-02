import { createContext,useState,useEffect} from "react";
import axios from 'axios'
export const Storecontext=createContext();
const Storecontextprovider=({children})=>{
    const [cartitems,setcartitems]=useState({});
    const [food_list,setFoodList]=useState([]);
    const url='https://cravecart.onrender.com'
    const [token,setToken]=useState("")
    const fetchFoodList=async()=>{
        const response=await axios.get(url+'/api/food/list')
        setFoodList(response.data.data)
    }
    useEffect(()=>{
        async function loadData(){
            await fetchFoodList()
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData()
    },[])
    const loadCartData=async(token)=>{
        const response=await axios.get(url+"/api/cart/get",{headers:{token}})
        setcartitems(response.data.cartData)
    }
    const addtocart=async(itemId)=>{
        console.log("Adding to cart:", itemId);
    if(!cartitems[itemId]){
        setcartitems({...cartitems,[itemId]:1})
    }
    else{
        setcartitems({...cartitems,[itemId]:cartitems[itemId]+1})
    }
    if(token){
        try {
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        } catch (error) {
            console.log(error);   
        }
    }
}
const removefromcart=async(itemId)=>{
    setcartitems({...cartitems,[itemId]:cartitems[itemId]-1})
    if(token){
        try {
            await axios.delete(`${url}/api/cart/remove?itemId=${itemId}`,{headers:{token}})
        } catch (error) {
            console.log(error);
            
        }
    }
}
const getTotalCartAmount=()=>{
    let total=0;
    for(let item in cartitems){
        if(cartitems[item]>0){
            let itemInfo=food_list.find(food=>food._id===item)
            total+=itemInfo.price * cartitems[item];
        }
    }
    return total;
}
    const contextvalues={
        food_list,
        cartitems,
        setcartitems,
        addtocart,
        removefromcart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        setFoodList
    }
    return(
        <Storecontext.Provider value={contextvalues}>
            {children}
        </Storecontext.Provider>
    )
}
export default Storecontextprovider