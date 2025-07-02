import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import Cart from './screens/Cart/Cart'
import Home from './screens/Home/Home.jsx'
import Placeorder from './screens/Placeorder/Placeorder'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/Loginpopup/Loginpopup'
import {useState} from 'react'
import {ToastContainer} from 'react-toastify'
import Verify from './screens/Verify/Verify'
import MyOrders from './screens/MyOrders/MyOrders'


const App = () => {
  const [showlogin,setshowlogin]=useState(false);
  return (
    <>
    <ToastContainer/>
    {showlogin ? <Loginpopup setshowlogin={setshowlogin} /> : <></>}

    <div className="app">
      <Navbar showlogin={showlogin} setshowlogin={setshowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/Cart' element={<Cart/>}> </Route>
        <Route path='/order' element={<Placeorder/>}> </Route>
        <Route path='/verify' element={<Verify/>}></Route>
        <Route path='/myorders' element={<MyOrders/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App