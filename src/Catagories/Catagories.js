import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FeatureCard from '../FeatureCard/FeatureCard'

const Catagories = () => {
    const [categories , setCategories]=useState([])
    useEffect(()=>{
      axios.get(`https://fakestoreapi.com/products/categories`).then((sd)=>setCategories(sd.data))
    },[])
    
    if(categories.length === 0) return <div>Loading...</div>
      return (
        
        <FeatureCard cards={categories}/>
    
      )
}

export default Catagories