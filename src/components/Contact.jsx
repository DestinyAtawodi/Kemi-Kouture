import React, { useState } from 'react'
import ContactImg from '../assets/full-shot-woman-wearing-full-pink-outfit.jpeg'
import { motion } from 'motion/react'
import Nav from './Nav'
import Footer from './Footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const whatsappNumber = '+2349016736464'
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`

    window.open(url, '_blank')
  }

  return (

    <div>

    <Nav />

    <div className='w-full h-screen bg-cover  flex flex-row items-center justify-center bg-yellow-100'>
    <motion.div 
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      className='container hover:backdrop-blur-sm hover:scale-110 duration-1000 mt-5 border-none py-10 px-10 border-2  rounded-lg w-1/2 h-auto text-transform uppercase'>
        <h1 className='text-center text-3xl font-bold mb-5'>Contact Us</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Your Name'
              className='p-2 border border-gray-300 rounded'
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Your Email'
              className='p-2 border border-gray-300 rounded'
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder='Subject'
              className='p-2 border border-gray-300 rounded'
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='Your Message'
              className='p-2 border border-gray-300 rounded h-32'
            />
            <button type="submit" className='bg-black text-white py-2 px-4 rounded  transition duration-300'>Send Message</button>
        </form>
    </motion.div>

     <motion.img 
      initial={{ opacity: 0, x: 150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
     src={ContactImg} alt="Woman in Pink Outfit" className='w-1/2 h-screen object-cover border-none' />
    </div>

    <Footer />

    </div>
  )
}

export default Contact