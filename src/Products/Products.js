// import React from 'react'
// import { Link } from 'react-router-dom';

// const Products = ({product = []}) => {
//   return (
//     <section className="text-gray-600 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="flex flex-wrap -m-4">
//       {
//         product.map((produc)=>{
//           console.log(produc,'produc');
//           const {id,title,price,description,category,image}=produc
//           return(
//           <Link to={`/Products/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-4 cursor-pointer" >
//         <a className="block relative h-48 rounded overflow-hidden">
//           <img alt={title} className="object-contain object-center w-full h-full block" src={image}/>
//         </a>
//         <div className="mt-4">
//           <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
//           <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
//           <p className="mt-1 text-md font-semibold">${price}</p>
//         </div>
//       </Link>
//           )
//         })
//       }

//     </div>
//   </div>
// </section>
//   )
// }

// export default Products


//___________________________________________________



import React from 'react'
import { Link } from 'react-router-dom';
import Scroll from '../scroll/Scroll';

const Products = ({product = []}) => {
  return (
    <>
    <Scroll/>
<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {
        product.map((produc)=>{
          console.log(produc,'produc');
          const {id,title,price,description,category,image}=produc
           return(
            <div key={id}>
        <Link to={`/Products/${id}`}>
        <a href="#" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
          <img  src={image} loading="lazy" alt={title} className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>
        </Link>
        <div className="flex items-start justify-between gap-2 rounded-b-lg bg-red-100 p-4">
          <div className="flex flex-col">
            <a href="#" className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">{category}</a>
            <span className="text-sm text-gray-500 lg:text-base">{title}</span>
          </div>

          <div className="flex flex-col items-end">
            <span className="font-bold text-gray-600 lg:text-lg">${price}</span>
          </div>
        </div>
      </div>
           ) 
        })
      }
</div>
  </div>
</div>
    </>
  )
}

export default Products





























