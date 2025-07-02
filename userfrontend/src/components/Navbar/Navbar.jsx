import React, { Profiler, useState,useEffect } from 'react'
import './Navbar.css'
import {assets} from "../../assets/assets"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {Storecontext} from '../../context/Storecontext'
import { useNavigate } from 'react-router-dom'

const Navbar = ({showlogin,setshowlogin}) => {
  const {getTotalCartAmount,token,setToken} =useContext(Storecontext);
  const[menu,setmenu]=useState('home')
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.removeItem("token")
    setToken("")
    navigate('/')
  }

  
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" onClick={()=>setmenu("home")}>
          <img src={assets.logo} id="logo" alt="logo"/>
          <h1>CraveCart</h1>
        </Link>
        
      </div>
        
        <ul className="navbar-bw">
            <Link to='/' onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <a href="#explore-menu"><li onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>Menu</li></a>
            <a href="#footer"><li onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li></a>
        </ul>
        <div className="navbar-right">
            <div className="navbarbasketicon">
              <Link to='/Cart'><img src={assets.basket_icon} alt="cart"/></Link>
              <div>
                { getTotalCartAmount()===0?<></>:<div className="dot"></div>}
              </div>
            </div>
            {
              !token
              ? <button onClick={()=>setshowlogin(true)}>Sign In</button>
              : <div className='navbar-profile'>
                <img src={assets.profile_icon}/>
                <ul className='nav-profile-dropdown'>
                  <Link to='./myorders'><img src={assets.bag_icon}/><p>Orders</p></Link>
                  <hr/>
                  <li onClick={logout}><img src={assets.logout_icon}/><p>Logout</p></li>
                  </ul></div>
            }
            
        </div>
    </div>
  )
}
 
export default Navbar