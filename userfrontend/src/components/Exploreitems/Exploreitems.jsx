import React from 'react'
import './Exploreitems.css'
import {menu_list} from '../../assets/assets'

const Exploreitems = ({category,setcategory}) => {

  return (
    <div className="exploreitems" id="explore-menu">
        <h1>Explore Our Menu</h1>
        <p id="paragh">Dive into a vibrant menu filled with irresistible dishes crafted to delight your taste buds. We’re here to satisfy every craving and make every meal unforgettable.</p>
        <div className="exploreitemslist">
          
          {menu_list.map((item,index)=>{
            return(
              <div onClick={()=>setcategory(category=>category===item.menu_name?"all":item.menu_name)} key={index} className="itemslist">
                <img className={category===item.menu_name?'active':""} src={item.menu_image}></img>
                <p>{item.menu_name}</p>
                

              </div>
              
            )
          })}
        </div>
        <hr/>
    </div>
  )
  
}

export default Exploreitems