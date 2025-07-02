import React from 'react'
import Header from '../../components/Header/Header'
import {useState} from 'react'
import Exploreitems from '../../components/Exploreitems/Exploreitems'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay'

const Home = () => {
    const [category,setcategory]=useState('all')
    return (
      <div>
          <Header/>
          <Exploreitems category={category} setcategory={setcategory}/>
          <Fooddisplay category={category}/>
      </div>
    )
}

export default Home