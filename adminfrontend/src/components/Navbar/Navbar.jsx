import React from 'react'
import {assets} from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="heading">
        <img className="logo" src={assets.logo} alt="" />
      <h2>CraveCart</h2>
      </div>
      <img src={assets.profile_image} alt="" className="profile" />
    </div>
  )
}

export default Navbar