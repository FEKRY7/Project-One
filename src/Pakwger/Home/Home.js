
import React, { Fragment, useEffect, useState } from 'react'
import Yhero from '../../NAV/Yhero'
import Products from '../../Products/Products'
import FeatureCard from '../../FeatureCard/FeatureCard'
import StatCard from '../../StatCard/StatCard'
import Footer from '../../Footer/Footer'
import axios from 'axios'
import Catagories from '../../Catagories/Catagories'
import Slider from '../../Slider/Slider'

import Scroll from '../../scroll/Scroll'

const Home = () => {
const [product , usefaster]=useState([])
useEffect(()=>{
 document.title=`Pyramids Home` 
})
useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products?limit=12`).then((sd)=>usefaster(sd.data))
},[])  
return (
     <Fragment>
      <Scroll/>
      <Slider/>
       <Yhero/>
       <Catagories/>
       <div className="flex flex-col text-center w-full mt-20">
      <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
    </div>
    {
       product.length > 0 ?
       <Products product={product}/>
       :
       <div>Loading....</div>
    }
       <Products/>    
       <StatCard/>
       
     </Fragment>   
  )
}

export default Home