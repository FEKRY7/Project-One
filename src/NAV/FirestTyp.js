// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// function FirestTyp() {
//   return (
//     <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-white py-3 
//     shadow-sm ">
//       <Container>
//         <Navbar.Brand href="#" className='navbar-brand fw-bold fs-4'>LA COLLECTION</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="mx-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Products</Nav.Link>
//             <Nav.Link href="#action2">About</Nav.Link>
//             <Nav.Link href="#action2">Contact</Nav.Link>
//           </Nav>
//           <div className='buttons'>
//           <a href="#" className='btn btn-outline-dark'>Login</a>
//           </div>
//           <div className='buttons'>
//           <a href="#" className='btn btn-outline-dark ms-2'>Register</a>
//           </div>
//           <div className='buttons'>
//           <a href="#" className='btn btn-outline-dark ms-2'>Cart (0)</a>
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default FirestTyp;
//___________________________________________
//___________________________________________
//___________________________________________
import Armany from './Photo/1809185.png'
import React, { useEffect, useState } from 'react'
import { FcIphone } from "react-icons/fc";
import { IoIosGitCompare } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
const navigations = [
  {
    name:'Home',
    path:'/'
  },
  {
    name:'Products',
    path:'/products'
  },
  {
    name:'About',
    path:'/about'
  },
  {
    name:'Contact US',
    path:'/contact'
  }
]
const FirestTyp = () => {
  const navigate = useNavigate();

  let currentLogin = null;

  if (localStorage.getItem("currentLogin")) {
      const currentUser = localStorage.getItem("currentLogin");
      currentLogin = JSON.parse(currentUser);
  }

  const handleLogout = () => {
      localStorage.removeItem("currentLogin");

      navigate("/login");
  };
  return (
    <>

<header className="text-gray-600 body-font">
<div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
<nav className="boko1 md:mr-auto flex flex-wrap items-center text-base justify-center ">
    <FcIphone className='b1'/><Link className="mr-5">123-456-7890</Link>
    </nav>
    <nav className=" md:mr-auto flex flex-wrap items-center text-base justify-center boko">
    <IoIosGitCompare className='b1'/><Link to='/contact' className="mr-5  bo1">Compare</Link>
    <CiHeart className='b1'/><Link to="/profile" className="mr-5  bo1">ProFile</Link>
     <CiLogin className='b1'/>{!currentLogin ?<Link to='/login' className="mr-5  bo1">Login</Link>:
             <button className="mr-5  bo1" onClick={() => handleLogout()}>Logout</button>}
    </nav>
  </div>
</header>
    <header className="text-gray-600 body-font shadow-lg wotar">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link to={`/`} className="flex cursor: pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src={Armany} alt='Armany' className="w-20 h-20 text-white p-2  rounded-full show"/>
        <span className="ml-3 text-xl show">Pyramids</span>
      </Link>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        {
          navigations.map((navigations)=>{
           return(
            <Link to={navigations.path} className='mr-5 show2'>{navigations.name}</Link>
           )
          })
        }
      </nav>
      
      <div className='show6'>
      <Link to={'/cart'}  className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-red-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-600 group-hover:h-full"></span>
<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Go to Cart</span>

      </Link>
      </div>
      
    </div>
  </header>
    </>
  )
}

export default FirestTyp
