import { useState } from 'react'
import { motion } from 'motion/react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

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
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-grow flex flex-col md:flex-row items-center justify-center bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 p-8 md:p-16 z-10"
        >
          <div className="max-w-md mx-auto glass p-8 rounded-2xl shadow-xl">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">Get in Touch</h1>
            <p className="text-gray-600 mb-8">Have a question? We'd love to hear from you.</p>
            
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700 ml-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="p-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all outline-none"
                />
              </div>
              
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="p-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="p-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="p-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all outline-none h-32 resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="mt-4 bg-brand-pink hover:bg-brand-pink-dark text-white font-bold py-4 px-6 rounded-xl shadow-lg transform transition-all active:scale-95 duration-200"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="hidden md:block w-1/2 h-[calc(100vh-4rem)] sticky top-16"
        >
          <img 
            src="https://res.cloudinary.com/kzekjix6/image/upload/v1789497305/full-shot-woman-wearing-full-pink-outfit.jpg" 
            alt="Woman in Pink Outfit" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-transparent"></div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default Contact