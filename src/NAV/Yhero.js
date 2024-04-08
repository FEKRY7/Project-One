import React, { Fragment } from 'react'
import amoge from './Photo/depositphotos_408110334-stock-photo-full-length-body-size-view.jpg'
import { Link } from 'react-router-dom'
const Yhero = () => {
  return (
    <Fragment>
    <section className="text-gray-600 body-font mt-20">
<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
      <br className="hidden lg:inline-block"/>readymade gluten
    </h1>
    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
    <div className="flex justify-center">
    <Link to='/products' class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Products</span>
</Link>
    </div>
  </div>
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <img className="object-cover object-center rounded" alt="hero" src={amoge}/>
  </div>
</div>
</section>
   </Fragment>
  )
}

export default Yhero