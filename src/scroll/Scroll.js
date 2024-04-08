import React, { useEffect, useState } from 'react'
import { FcCollapse } from "react-icons/fc";

const Scroll = () => {
  const [backtotop,setBacktotop]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
           
        if(window.scrollY > 300){
            setBacktotop(true)
        }else{
            setBacktotop(false) 
        }
    })
  },[])
  const scrollUp =()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
  }
  return (
    <div className='top-btn-position'>
        {backtotop && (
          <FcCollapse onClick={scrollUp}/>
        )}
    </div>
  )
    
}

export default Scroll