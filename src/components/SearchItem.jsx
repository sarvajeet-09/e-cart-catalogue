import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'
const SearchItem = () => {
const [filtered, setfiltered] = useState([])
  const {term} = useParams(); 

    useEffect(() => {
     const fproduct = items.filter((item) => item.title.toLowerCase().includes(term.toLowerCase()))
     console.log(fproduct)
     setfiltered(fproduct)
    },[term])



    return (
    <Product items={filtered} />
  )
}

export default SearchItem