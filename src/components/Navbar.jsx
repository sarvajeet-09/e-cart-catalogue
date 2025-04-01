import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { items } from './Data'
function Navbar({ setData, cart }) {

    const [searchItem, setSearch] = useState("");
    const navigate = useNavigate()

    const filterByCategory = (categor) => {
        const element = items.filter((item) => item.category === categor)
        console.log(element)
        setData(element)
        navigate(`/`)
    }

    const filterByPrice = (price) => {
        const priceEle = items.filter((item) => item.price >= price)
        setData(priceEle)
    }

    const handleClick = (e) => {
        e.preventDefault()
        navigate(`/search/${searchItem}`)
        setSearch("")
    }

    return (
        <>
            <header className='sticky-top shadow-2'>
                <div className="nav-bar shadow-1">
                    <div className="brand">
                        <Link to={'/'} className='brand-name'> E-cart</Link>
                    </div>
                    <form onSubmit={handleClick} className="search">
                        <input type="text"
                            value={searchItem}
                            onChange={(e) => setSearch(e.target.value)}
                            name="" placeholder='search' id="" />
                        <span onClick={handleClick}><i className='fa fa-magnifying-glass'></i></span>
                    </form>
                    <Link to={'/cart'} className="cart">
                        <button type="button" className="btn position-relative">
                            <i className='fa fa-cart-shopping'></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.length}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                        {/* <button className='btn'><i className='fa fa-cart-shopping'></i></button> */}
                    </Link>
                </div>
            </header>
            <hr />
            <div className="navbar-wrapper py-3">
                <div className="items">Filter By {"->"}</div>
                <div className="items" onClick={() => setData(items)} >No Filter</div>
                <div className="items" onClick={() => filterByCategory('mobiles')} >Mobiles</div>
                <div className="items" onClick={() => filterByCategory('laptops')}>Laptops</div>
                <div className="items" onClick={() => filterByCategory('tablets')}>Tablets</div>
                <div onClick={() => filterByPrice('29999')} className="items"   >{">="}29999</div>
                <div onClick={() => filterByPrice('49999')} className="items"  >{">="}49999</div>
                <div onClick={() => filterByPrice('69999')} className="items">{">="}69999</div>
                <div onClick={() => filterByPrice('89999')} className="items">{">="}89999</div>

            </div>


            {/* responsive navbar start */}
            <div className="navbar-responsive sticky-top">
                <div className="brand1">
                   <div> <Link to={'/'} className='brand-name'> E-cart</Link></div>
                   <div> <Link to={'/cart'} className="cart">
                        <button type="button" className="btn position-relative">
                            <i className='fa fa-cart-shopping'></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.length}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                        {/* <button className='btn'><i className='fa fa-cart-shopping'></i></button> */}
                    </Link></div>
                    
                </div>
                <div className="combiner-div">
                    <form onSubmit={handleClick} className="search">
                        <input type="text"
                            value={searchItem}
                            onChange={(e) => setSearch(e.target.value)}
                            name="" placeholder='search' id="" />
                        <span onClick={handleClick}><i className='fa fa-magnifying-glass'></i></span>
                    </form>
                    <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle mb-0 pt-2 h-100 bg-transparent border-0" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter By
                        </a>

                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item items"  onClick={() => setData(items)} href="javascript:void(0)">No Filter</a></li>
                            <li><a class="dropdown-item items"  onClick={() => filterByCategory('mobiles')} href="javascript:void(0)">Mobiles</a></li>
                            <li><a class="dropdown-item items" onClick={() => filterByCategory('laptops')} href="javascript:void(0)">Laptops</a></li>
                            <li><a class="dropdown-item items" onClick={() => filterByCategory('tablets')} href="javascript:void(0)">Tablets</a></li>
                            <li><a class="dropdown-item items" onClick={() => filterByPrice('29999')} href="javascript:void(0)">{">="}29999</a></li>
                            <li><a class="dropdown-item items" onClick={() => filterByPrice('49999')} href="javascript:void(0)">{">="}49999</a></li>
                            <li><a class="dropdown-item items" onClick={() => filterByPrice('69999')} href="javascript:void(0)">{">="}69999</a></li>
                            <li><a class="dropdown-item items" onClick={() => filterByPrice('89999')} href="javascript:void(0)">{">="}89999</a></li>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Navbar