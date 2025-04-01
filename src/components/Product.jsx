import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

const Product = ({ items, cart, setCart }) => {

    //  console.log(items)
    const addToCart = (id, price, title, description, imgSrc) => {
        const Obj = {
            id, price, title, description, imgSrc
        }


        const isItemInCart = cart.some((item) => item.id === Obj.id);
        console.log(isItemInCart)
        if (isItemInCart) {
            toast.success(`item already exists in the cart`, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            return;
        }


        setCart([...cart, Obj])
        console.log(cart)


        toast.success(`item added to cart SucessFully`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
    }


    // scrolling top onclicking the icon
    function scrollClick() {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>

            {/* toastify start */}
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"

            />
            {/* toastufy end */}



            <div className="product-card py-5">
                <div className="container">
                    <div className="row">
                        {
                            items.map((product) => {
                                return (
                                    <div className="col-lg-4 mb-4">
                                        <div className="main-card">
                                            <div className="pro-card">
                                                <h3>{product.title}</h3>
                                                <Link to={`/product/${product.id}`} key={product.id} onClick={scrollClick}>  <img src={product.imgSrc} className='img-fluid img' alt="" /></Link>
                                                <p>{product.description}</p>
                                            </div>
                                            <div className="price-about">
                                                <button type='button' className='btn'><i className='fa fa-indian-rupee-sign'></i> {product.price}</button>



                                                <button
                                                    onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                                                    type='button'
                                                    className='btn '


                                                >Add to Cart <i className='fa fa-cart-shopping'></i></button>
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

export default Product