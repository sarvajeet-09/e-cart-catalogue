import { React, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { items } from './Data'
import './ProductDetail.css'
import './Product.css'
import Product from './Product'

const ProductDetail = ({setCart, cart}) => {
  const { id } = useParams();
  const [product, setProduct] = useState([])
  const [related, setRelated] = useState([])

// for scrolling the window after click
 


  useEffect(() => {
    const filterProduct = items.filter((product) => {
      return product.id == id
    })
    console.log(filterProduct)
    setProduct(filterProduct[0])

    const relatedProducts = items.filter((P) => P.category === product.category)
    // console.log(relatedProducts.id)
    setRelated(relatedProducts)

  }, [id, product.category])











  return (
    <>
      {/* main product displaying start */}

      <div className="container">
        <div className="product-detail-div">
          <div className="row">
            <div className="col-lg-5 mb-5">
              <div className="img">
                <img src={product.imgSrc} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-7 mb-5">
              <div className="details">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <h4> <i className="fa fa-indian-rupee-sign"></i> {product.price}</h4>

                <div className="button-div">
                  <button className="btn1">
                    Add To Cart <i className="fa fa-cart-shopping"></i>
                  </button>
                  <button className="btn2">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          <div className="col-lg-12">
            <h1 className="text-light">Related Product</h1>
          </div>
          </div>

        </div>
      </div>

      {/* main product displaying end */}

      {/* related product start */}

      {/* <div className="container">
        <div className="row">
          {
            related.map((product) => {
              return (
                <div className="col-lg-4 mb-4">
                  <Link to={`/product/${product.id}`} key={product.id} onClick={scrollClick} className="main-card">
                    <div className="pro-card">
                      <h3>{product.title}</h3>
                      <img src={product.imgSrc} className='img-fluid img' alt="" />
                      <p>{product.description}</p>
                    </div>
                    <div className="price-about">
                      <button type='button' className='btn'><i className='fa fa-indian-rupee-sign'></i> {product.price}</button>
                      <button type='button' className='btn '>Add to Cart <i className='fa fa-cart-shopping'></i></button>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div> */}
      {/* related product end */}

   
   <Product items={related} cart={cart} setCart={setCart} />
    </>
  )
}

export default ProductDetail