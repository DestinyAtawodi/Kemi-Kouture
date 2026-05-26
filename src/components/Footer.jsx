import React from 'react'
import  Logo  from '../assets/54a9154a-bf29-4985-8a88-b2605e6cb5a6.JPG'
import { FaInstagram, FaTiktok, FaAddressCard, FaCalendar, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gray-200 py-10'>
        <img src={Logo} className="h-12 w-12 rounded-full mx-auto" />
        <div flex className="flex flex-row justify-center mt-10 px-4">

            <ul className="w-1/3 text-transform uppercase font-bold">
              <li className='text-xl text-transform uppercase font-bold text-pink-500'>Company</li>
              <li className='flex flex-row gap-2'> <Link to="/about"> About Us </Link><FaPhone className='mt-1' /> </li>
              <li className='flex flex-row gap-2'> <Link to="/events"> Events </Link><FaCalendar className='mt-1' /> </li>
              <li className='flex flex-row gap-2'> <Link to="/contact"> Contact </Link><FaAddressCard  className='mt-1'/> </li>
            </ul>


            
            <ul className="w-1/3 text-transform uppercase font-bold">
              <li className='text-xl text-transform uppercase font-bold text-pink-500'>Follow Us</li>
              <li><a className='flex flex-row gap-2' href='https://www.instagram.com/kemikouture24?igsh=aGxvYm51bGF6bXc1'> Instagram <FaInstagram className='mt-1' /> </a> </li>
              <li><a className='flex flex-row gap-2' href='https://www.tiktok.com/@kemi_kouture1?_r=1&_t=ZS-961aj1jjyJ3'> Tiktok<FaTiktok className='mt-1'/> </a> </li>
            </ul>
              
             <div className='w-1/3'>
             <h2 className='text-xl text-transform uppercase font-bold text-pink-500'>Address</h2>
             <p>Redeemers University Ede, Osun State, Nigeria.</p>
             </div>
        </div>
       
         <p className="text-center text-gray-500 mt-2">© 2026 Kemi Kolture. All rights reserved.</p>
       
    </div>
  )
}

export default Footer