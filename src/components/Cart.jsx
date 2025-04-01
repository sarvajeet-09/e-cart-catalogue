import React from 'react'
import Product from './Product'
import './Cart.css'


const Cart = ({ cart, setCart }) => {
  console.log(cart)

  const remove = (id) =>{
    console.log(id)
 const newData = cart.filter((item)=> item.id != id)
  console.log(newData)
  setCart(newData)
  }

if(cart.length == 0){

  return (
    <div className="cart-empty">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="message">
            <h2>Your Cart Is Empty</h2>
          </div>
        </div>
      </div>
    </div>
  )
}


  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            {
              cart.map((product) => {
                return (
                  <div className="cart-card">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="cart-image">
                          <img src={product.imgSrc} className='img-fluid' alt="" />
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="cart-content">
                          <h1>{product.title}</h1>
                          <h2>{product.description}</h2>
                          <h3> <i className='fa fa-indian-rupee-sign'></i> {product.price}</h3>
                          <div className="button-div">
                            <button className=' btn btn-warning text-light me-4'>Buy Now</button>
                            <button className=' btn btn-success' onClick={() => remove(product.id)} >Remove From Cart</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart