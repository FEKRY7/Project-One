import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../Products/Products'
const CategoriesProducts = () => {
const {name} = useParams()
const [product , usefaster]=useState([])
useEffect(()=>{
axios.get(`https://fakestoreapi.com/products/category/${name}`).then((sd)=>usefaster(sd.data))
},[])  
if(product.length === 0) return <div>Loading...</div>
return (
    <>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
    </div>
    <Products product={product}/>
  </div>
</section>
    </>
  )
}

export default CategoriesProducts