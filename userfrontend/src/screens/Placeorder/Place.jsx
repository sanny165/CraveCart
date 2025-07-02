import React from "react";
import { useNavigate } from "react-router-dom";
import "./PlaceOrder.css";
import { Storecontext } from "../../context/Storecontext";
import { useContext,useState,useEffect } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

const Placeorder = () => {
const [data,setData]=useState({
  first_name:"",
  last_name:"",
  email:"",
  street:"",
  city:"",
  state:"",
  zip_code:"",
  country:"",
  phone:""
})

  const { getTotalCartAmount,food_list,cartitems,url,token } = useContext(Storecontext);

  const onChangeHandler=(e)=>{
    const {name,value}=e.target 
    setData({...data,[name]:value})
  }
  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    let orderItem=[];
    food_list.map((item)=>{
      if(cartitems[item._id]>0){
        let itemInfo=item;
        itemInfo.quantity=cartitems[item._id]
        orderItem.push(itemInfo)
      }
    })
    let orderData={
      address:data,
      items:orderItem,
      amount:getTotalCartAmount() + (getTotalCartAmount() === 0
                    ? 0
                    : getTotalCartAmount() < 500
                    ? 50
                    : 20)
    }
    try{
      let response=await axios.post(url+"/api/order/place",orderData,{headers:{token}})
      const {session_url}=response.data
      window.location.replace(session_url)
    }
    catch(error){
      console.log(error);
      

    }


  }

  const navigate = useNavigate();
  useEffect(()=>{
    if(!token){
      navigate('/cart')
      toast("Sign in required")
    }
    else if(getTotalCartAmount()===0){
      navigate('/cart')
      toast("Add items to the cart to proceed")
    }
  },[token])
  return (
    <form onSubmit={onSubmitHandler} className="delivery">
      <div className="delivery-info">
        <h2>Delivery Information</h2>
        <div className="delivery-inputs">
          <div className="multifields">
            <input required name="first_name" value={data.first_name} onChange={onChangeHandler} type="text" placeholder="First Name" />
            <input required name="last_name" value={data.last_name} onChange={onChangeHandler} type="text" placeholder="Last Name" />
          </div>

          <input required name="email" value={data.email} onChange={onChangeHandler} type="email" placeholder="Email address" />
          <input required name="street" value={data.street} onChange={onChangeHandler} type="text" placeholder="Street" />

          <div className="multifields">
            <input required name="city" value={data.city} onChange={onChangeHandler} type="text" placeholder="City" />
            <input required name="state" value={data.state} onChange={onChangeHandler} type="text" placeholder="State" />
          </div>

          <div className="multifields">
            <input required name="zip" value={data.zip} onChange={onChangeHandler} type="number" placeholder="Zip Code" />
            <input required name="country" value={data.country} onChange={onChangeHandler} type="text" placeholder="Country" />
          </div>

          <input required name="phone" value={data.phone} onChange={onChangeHandler} type="tel" placeholder="Phone" />
        </div>
      </div>  
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>
                ₹
                {getTotalCartAmount() === 0
                  ? 0
                  : getTotalCartAmount() < 500
                  ? 50
                  : 20}
              </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>
                ₹
                {getTotalCartAmount() +
                  (getTotalCartAmount() === 0
                    ? 0
                    : getTotalCartAmount() < 500
                    ? 50
                    : 20)}
              </p>
            </div>
          </div>
          <button type='submit'>Proceed to Payment</button>
        </div>
      
    </form>
  );
};

export default Placeorder;
