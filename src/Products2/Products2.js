import React, { useEffect, useState } from 'react'
import Products from '../Products/Products'
import Catagories from '../Catagories/Catagories'
import axios from 'axios'
const Products2 = () => {
  const [product , usefaster]=useState([])
  useEffect(()=>{
    document.title=`Pyramids Products` 
   })
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products`).then((sd)=>usefaster(sd.data))
  },[])
  return (
    <>
    <Catagories/>
    <div className="flex flex-col text-center w-full mt-20">
      <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL PRODUCTS</h1>
    </div>
    {
      product.length > 0 ?
      <Products product={product}/> 
      :
      <div>Loading...</div>
    }
    </>
  )
}

export default Products2