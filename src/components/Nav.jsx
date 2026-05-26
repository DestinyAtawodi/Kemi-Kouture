import React from 'react'
import { motion } from 'motion/react'
import { FaHome, FaPhone, FaBars} from 'react-icons/fa';
import { useState } from 'react';
import  Logo  from '../assets/54a9154a-bf29-4985-8a88-b2605e6cb5a6.JPG'
import { Link } from 'react-router-dom';

const Nav = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false)
    
      const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    
  return (
  
    <motion.div
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0 }}
      duration={2}
    >
       
      <nav className=" bg-gray-200  text-pink-300 h-16 flex items-center justify-between px-4 shadow-md">
              <img src={Logo} className="h-12 w-12 rounded-full" />

       <ul className="hidden  md:flex space-x-4 font-bold text-transform uppercase">
          <li className="hover:text-pink-400 transition-colors transform hover:scale-110 duration-1000"><Link to="/">Home</Link></li>
          <li className="hover:text-pink-400 transition-colors transform hover:scale-110 duration-1000"><Link to="/about">About</Link></li>
          <li className="hover:text-pink-400 transition-colors transform hover:scale-110 duration-1000"><Link to="/contact">Contact</Link></li>
          <li className="hover:text-pink-400 transition-colors transform hover:scale-110 duration-1000"><Link to="/events">Events</Link></li>
        </ul>

         

        <FaBars 
        onClick={toggleMenu}
        className="text-2xl cursor-pointer hover:text-pink-400 transition-colors md:hidden" />
      </nav>

   
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
        className="fixed right-0 top-0 h-screen w-64 bg-gray-500 text-white shadow-lg z-50"
      >
        <div className="p-6">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-2xl hover:text-pink-300"
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold mt-8 mb-6">Menu</h2>
          <ul className="space-y-4">
            <li><Link to="/" className="hover:text-pink-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-pink-300">About</Link></li>
            <li><Link to="/contact" className="hover:text-pink-300">Contact</Link></li>
            <li><Link to="/events" className="hover:text-pink-300">Events</Link></li>
          </ul>
        </div>
      </motion.div>

    
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleMenu}
          className="fixed inset-0  bg-opacity-50 z-40"
        />
      )}



    </motion.div>
 
  )
}

export default Nav