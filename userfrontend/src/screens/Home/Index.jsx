import React from 'react'
import Header from '../../components/Header/Header'
import {useState} from 'react'
import Exploreitems from '../../components/Exploreitems/Exploreitems'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay'
import FloatingCart from '../../components/FloatingCart/FloatingCart'
import HeroSurpriseWrapper from '../../components/HeroSurpriseWrapper/HeroSurpriseWrapper';

const Home = () => {
    const [category,setcategory]=useState('all')
    return (
      <div>
          <Header/>
          <HeroSurpriseWrapper />
          <Exploreitems category={category} setcategory={setcategory}/>
          <Fooddisplay category={category}/>
          <FloatingCart />
          
      </div>
    )
}

export default Home