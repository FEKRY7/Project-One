import React from 'react'
import Home from './Pakwger/Home/Home'
import FirestTyp from './NAV/FirestTyp'
import './App.css'
import { Routes,Route } from "react-router-dom";
import Footer from './Footer/Footer'
import Prodect from './Product/Product';
import Products2  from './Products2/Products2'
import CategoriesProducts from './CategoriesProducts/CategoriesProducts';
import Cart from './Cart/Cart';
import About from './About/About';
import Contact from './Contact/Contact';
import LoginPage from './SinLog/LoginPage';
import SignupPage from './SinLog/SignupPage';
import ProfilePage from './SinLog/ProfilePage';
const App = () => {
  return (
   <>
   <FirestTyp/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/signup" element={<SignupPage/>} />
    <Route path="/profile" element={<ProfilePage/>} />
    <Route path='/Products/:id' element={<Prodect/>}/>
    <Route path='/products' element={<Products2/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/categories/:name' element={<CategoriesProducts/>}/>
    <Route path='Cart' element={<Cart/>}/>
    </Routes>
   <Footer/>
   </>
  )
}

export default App


