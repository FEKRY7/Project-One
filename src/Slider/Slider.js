import React from 'react'
import imger1 from './photo/612-T5YABuL._SX3000_.jpg'
import imger2 from './photo/61j6L8NKWZL._SX3000_.jpg'
import imger3 from './photo/71IGGQSjcCL._SX3000_.jpg'
import imger4 from './photo/71bRdL8KyML._SX3000_.jpg'
import imger5 from './photo/pexels-tim-mossholder-3091202.jpg'
import { Carousel } from 'flowbite-react'
const Slider = () => {
  return (
<>
<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel>
      <img className='solo' src={imger1} alt="..." />
      <img className='solo' src={imger2} alt="..." />
      <img className='solo' src={imger3} alt="..." />
      <img className='solo' src={imger4} alt="..." />
      <img className='solo' src={imger5} alt="..." />
    </Carousel>
  </div>
  
</>
  )
}

export default Slider