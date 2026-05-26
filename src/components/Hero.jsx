import React from 'react'
import HeroImage from '../assets/pink-podium-with-gift-box-shopping-trolley-product-sale-banner-presentation-3d-background.png'
import { motion } from'motion/react';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 2 }}
    className=' mt-1  py-20 bg-pink-400'>

      <div className='flex flex-row items-center justify-center'>
        
      <img src={HeroImage} alt="Hero Image" className='w-1/2 h-auto'/>
        <h1 className='text-4xl md:text-7xl font-bold text-center mt-10 text-transform uppercase flex flex-col w-1/2'>Kemi 
        <span className='text-transparent bg-gradient-to-r from-pink-300 to-white bg-clip-text'>Kouture</span>
        </h1>
        </div>
        <p className='text-xl text-center text-gray-500 font-bold mt-10 text-transform uppercase opacity-60'>Delivering Beautiful & Affordable Womens Wear All Across Nigerian Campuses.</p>
        <div className='flex items-center justify-center'>
        <a href='https://chat.whatsapp.com/FlO624DrgysJIrmReDl1ni'>
        <button
        className='bg-pink-300 hover:scale-90 hover:bg-green-400 text-white font-bold flex flex-row items-center justify-center
        py-4 px-4 rounded-full mt-10 text-transform uppercase shadow-lg duration-1000'>
        Join Community <FaWhatsapp className='ml-2' /> </button>
        </a>

        </div>

    </motion.div>
  )
}

export default Hero