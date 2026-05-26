import React from 'react'
import Nav from '../components/Nav'
import CEOImg from '../assets/a2e4a3de-18bc-41df-81d0-913c6744b716.png'
import  Logo  from '../assets/54a9154a-bf29-4985-8a88-b2605e6cb5a6.JPG'
import AboutBg from '../assets/happy-young-woman-posing-with-shopping-bags-isolated-pink-wall.jpeg'
import Footer from '../components/Footer'
import { FaAddressCard, FaInfoCircle } from 'react-icons/fa'
import { motion } from 'motion/react'

const About = () => {
  return (
    <div  >
      <Nav />


        <div className=' items-center justify-center text-white flex flex-row'>
          <img src={CEOImg} alt="About Us" className='h-auto mt-8 w-1/2 hidden md:block' />
          
        <div className='w-1/2 h-auto m-20'>
        <h1 className='text-4xl font-bold text-center mt-10 text-transform uppercase'> <span className='text-transparent bg-gradient-to-r from-pink-200 to-white bg-clip-text'>About</span> Us</h1>
        <motion.p 
        initial = {{ opacity: 0}}
        whileInView= {{ opacity: 1}}
        transition={{ duration: 2 }}

        className='text-center mt-4 text-lg'>Kemi kouture is a marketing brand aimed at supplying the best thrift female clothings and fashion items at affordable prices. Founded by Adelunsi Folakemi, kemi kouture has grown to become a leading name in many universities, known for its commitment to quality and affordability.</motion.p>
        </div>

        </div>

        <div className='flex flex-row bg-gray-300 mt--50 p-8 rounded-lg shadow-xl'>
          
          <div 
             className='w-1/2 p-4'>
            <h2 className='text-2xl font-bold mb-4 flex flex-row gap-2'>Our CEO <FaAddressCard className='mt-1 text-gray-600' /> </h2>
            <p className='text-lg'>Meet our visionary CEO, Adelunsi Folakemi, who is the driving force behind Kemi Kouture's success. With a passion and  deep understanding of Enterpreneurship, Our CEO has been instrumental in shaping our company's vision and mission. Under their leadership, Kemi Kouture has become a leading name in many universities for afforadable womens wear, known for fast customer care services, quick deliveries  and commitment to excellence. Adelunsi Folakemi's dedication to ensuring customers satisfication with our services is at the heart of everything we do at Kemi Kouture.</p>
          </div>
          
          <div className='w-1/2 p-4'>
            <h2 className='text-2xl font-bold mb-4 flex flex-row gap-2'>Our Mission <FaInfoCircle className='mt-1 text-gray-600' /> </h2>
            <p className='text-lg'>At Kemi Kolture, our mission is to deliver the best handpicked thrift & new fashion items worldwide, ensuring quality and style for every customer.</p>
          </div>

        </div>

        <Footer />
    </div>
  )
}

export default About