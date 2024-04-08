import React, { useEffect } from 'react'
import Scroll from '../scroll/Scroll'

const Contact = () => {
  useEffect(()=>{
    document.title=`Pyramids Contact US` 
   }) 
 return (
<>
<Scroll/>
<section className="adreso text-gray-600 body-font relative">
    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
            <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
            <a className="text-red-500 leading-relaxed">example@email.com</a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
            <p className="leading-relaxed">123-456-7890</p>
          </div>
        </div>
    <div>
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap polpo">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative salman">
        <iframe width="100%" height="100%" className="absolute inset-0 alba" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
      </div>
      <div className='oper'>
      <div className="lg:w-4/5 md:w-1/4 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
        <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
        <div className="relative mb-4">
          <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
          <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Send</button>
        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
      </div>
      </div>
    </div>
    </div>
  </section>
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
      <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
      <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
    </div>
    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
      <button className="bg-red-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-red-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
        </svg>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
          <span className="title-font font-medium">Google Play</span>
        </span>
      </button>
      <button className="bg-red-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-red-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
          <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
          <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
        </svg>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-gray-600 mb-1">Download on the</span>
          <span className="title-font font-medium">App Store</span>
        </span>
      </button>
    </div>
  </div>
  <div className="bg-red-500 py-6">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
        <div className="mb-3 text-center md:mb-0 md:text-left">
          <span className="font-bold uppercase tracking-widest text-gray-100">Newsletter</span>
          <p className="text-gray-100">Subscribe to our newsletter</p>
        </div>

        <form className="flex w-full gap-2 md:max-w-md">

          <input type='email'  placeholder="Email" className="w-full flex-1 rounded border border-white bg-red-400 px-3 py-2 text-white placeholder-indigo-100 outline-none ring-indigo-300 transition duration-100 focus:ring" />
          <a href="#_" className="relative inline-block text-lg group">
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-red-500 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-red-500">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span className="relative">Send</span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
        </form>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default Contact

