import React from 'react'
import './Fooddisplay.css'
import { Storecontext } from '../../context/Storecontext'
import { useContext } from 'react'
import Foodcard from '../Foodcard/Foodcard'

const Fooddisplay = ({category}) => {
    const {food_list}=useContext(Storecontext);

  return (
    <div className="fooddisplay" id="fooddisplay">
        <h2>Top dishes you might like</h2>
        <div className="fooddisplaylist">
            {
                food_list.map((item,index) => {
                  if(category.toLowerCase()==="all" || item.category.toLowerCase()===category.toLowerCase())
                return(
                    <Foodcard
              key={item._id}
              _id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
                )

                
            })
            }
            
        </div>
    </div>
  )
}

export default Fooddisplay