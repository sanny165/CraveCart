import React from 'react'
import './Veri.css'
import { Storecontext}  from '../../context/Storecontext'
import { useSearchParams,useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import { useContext ,useEffect} from 'react'
import axios from 'axios'

const Verify = () => {

    
    const [searchParams,setSearchParams]=useSearchParams()

    const success=searchParams.get("success")
    const orderId=searchParams.get("orderId")

    const navigate=useNavigate()

    console.log(success,orderId)
    const {url}=useContext(Storecontext)

    const verifyPayment=async()=>{
        try {
            const response=await axios.post(url+'/api/order/verify',{success,orderId})
            if(response.data.message==='Not paid'){
                navigate('/')
            }
            else{
                navigate('/myorders')
            }
            
        } catch (error) {
            navigate('/')
            
            
        }
        

    }
    useEffect(()=>{
        verifyPayment()
    },[])

  return (
    <Loader/>
  )
}

export default Verify