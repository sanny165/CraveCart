import React,{useContext} from 'react'
import {assets} from '../../assets/assets'
import storecontextprovider, { Storecontext } from "../../context/Storecontext";
import {useNavigate} from 'react-router-dom'
import './Cart.css'


const Cart = () => {
  const {cartitems, food_list, addtocart, removefromcart,getTotalCartAmount,url} = useContext(Storecontext);
  const navigate=useNavigate();
  console.log("cartitems state:", cartitems);

  return (
    <div className="cart">
      <div className="cart-items-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Modify</p>
      </div>
      <br/>
      <hr/>

      {
        
        food_list.map((food,index)=>{
          if(cartitems[food._id]>0){
            return(
              <>
              <div className="cart-items-item">
                <div className="imgg">
                  <img src={`${url}/image/${food.image}`} alt="" />

                </div>
                
                <p>{food.name}</p>
                <p>₹{food.price}</p>
                <p>{cartitems[food._id]}</p>
                <p>₹{(food.price * cartitems[food._id]).toFixed(2)}</p>
                <div className="cart-counter">
                  <img
                        onClick={() => removefromcart(food._id)}
                        src={assets.remove_icon_red}
                        alt=""
                      />
                      <p>{cartitems[food._id]}</p>
                      <img
                        onClick={() => addtocart(food._id)}
                        src={assets.add_icon_green}
                        alt=""
                      /> 
                </div>
                      
                
              </div>
              <hr/>
              </>
            )
          }
        })
      }
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>
  ₹{getTotalCartAmount() === 0
    ? 0
    : getTotalCartAmount() < 500
    ? 50
    : 20}
</p>

            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Total</p>
              <p>₹{getTotalCartAmount()+(getTotalCartAmount() === 0
    ? 0
    : getTotalCartAmount() < 500
    ? 50
    : 20)}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed to Checkout</button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promocode, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='Enter promo code'/>
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cart;
