import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../Context/StoreContext'
import CompanyLocation from '../../components/CompanyLocation/CompanyLocation'
const PlaceOrder = () => {

  const {gettotalcartamount} = useContext(StoreContext)

  return (
    <>
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-feilds">
          <input type="text" placeholder='first name' />
          <input type="text" placeholder='last name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='address' />
        <div className="multi-feilds">
          <input type="text" placeholder='city' />
          <input type="text" placeholder='state' />
        </div>
        <div className="multi-feilds">
          <input type="text" placeholder='Pin code' />
          <input type="text" placeholder='country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="card-total-details">
              <p>Subtotal</p>
              <p>${gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <p>Delivery Fee</p>
              <p>${gettotalcartamount()===0?0:2}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <b>Total</b>
              <b>${gettotalcartamount()===0?0:gettotalcartamount()+2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
      
    </form>
    <div>
        <CompanyLocation/>
      </div>
    </>
  )
}

export default PlaceOrder
