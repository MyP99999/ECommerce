import React from 'react'
import { Link } from 'react-router-dom'

export default function CartTotas({value}) {
    const{cartSubTotal, cartTax, cartTotal, clearCart} = value
    return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-8 mt-2 ms-lg-auto text-capitalize text-end">
                    <Link to='/'>
                        <button className='btn btn-outline-danger 
                        text-uppercase mb-3 px-5' type='button'
                        onClick={() => clearCart()}>
                            clear cart
                        </button>
                    </Link>
                    <h5>
                        <span className="text-title">
                            subtotal : 
                        </span>
                        <strong>$ {cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            tax : 
                        </span>
                        <strong>$ {cartTax}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            total : 
                        </span>
                        <strong>$ {cartTotal}</strong>
                    </h5>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
