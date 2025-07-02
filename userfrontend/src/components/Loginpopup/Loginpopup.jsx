import React from 'react'
import './Loginpopup.css'
import {assets} from '../../assets/assets'
import {useState,useEffect} from 'react'
import {useContext} from 'react'
import {Storecontext} from '../../context/Storecontext'
import axios from 'axios'
import {toast} from 'react-toastify'

const Loginpopup = ({setshowlogin}) => {

    const {url,token,setToken}=useContext(Storecontext)
    const[curstate,setcurstate]=useState("Sign In")
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })
    const onChangeHandler=(e)=>{
        const {name,value}=e.target;
        setData({...data,[name]:value})
    }
    const onSubmitHandler=async(e)=>{//as com wid backend
        e.preventDefault()

        let newurl=url

        if(curstate==="Sign In"){
            newurl+='/api/user/login'
        }
        else{
            newurl+='/api/user/register'
        }

        try {
            const response=await axios.post(newurl,data)
            if(curstate==="Sign Up"){
                toast.success("account created successfully!! please login...")
                setcurstate("Sign In")

            }
            else{
                setToken(response.data.token)
                localStorage.setItem("token",response.data.token)
                setshowlogin(false)

            }
        } catch (error) {
            console.log(error.response.data.message);
            toast("password should be atleast 8 characters")
            
        }
    }    

  return (
    <div className="login-popup">
        <form onSubmit={onSubmitHandler} action="" className="login-popup-container">
            <div className="loginpopuptitle">
                <h2>
                    {curstate}
                </h2>
                <img onClick={()=>{
                    console.log("cross clicked");
                     
                    setshowlogin(false)}} src={assets.cross_icon}/>
            </div>
            <div className="login-popup-inputs">
            {curstate!=="Sign In"?<input name="name" value={data.name} onChange={onChangeHandler} type="text" placeholder="Your Name" required/>:<></>}
                <input name="email" value={data.email} onChange={onChangeHandler} type="email" placeholder="Your Email" required/>
                <input name="password" value={data.password} onChange={onChangeHandler} type="password" placeholder='Password' required/>
                {curstate!=="Sign In"?<input name="Confirmpassword" value={data.Confirmpassword} onChange={onChangeHandler} type="password" placeholder='Confirm password' required/>:<></>}
            
            <button type="submit" className="btn">
                {curstate}
            </button>
            <div className="login-popup-condn">
                <input type="checkbox" required/>
                <p>I agree to the <span>Terms and Conditions</span> and <span>Privacy Policy</span></p>

            </div>
            <div className="click">
                    {
                curstate==="Sign In"?
                <p>Create a new account? <span onClick={()=>setcurstate("Sign Up")}>Click here</span></p>:
                <p> Already have an account? <span onClick={()=>setcurstate("Sign In")}>Click here</span></p>
            }
            </div>
            
            </div>
        </form>
    </div>
  )
}

export default Loginpopup