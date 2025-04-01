import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import { items } from './components/Data'

function App() {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
      <Router  >
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} ></Route>
          <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} ></Route>
          <Route path="/search/:term" element={<SearchItem />} ></Route>
          <Route path="/cart/" element={<Cart cart={cart} setCart={setCart} />} ></Route>
        </Routes>
        {/* <Product/> */}
      </Router>





    </>
  )
}

export default App
