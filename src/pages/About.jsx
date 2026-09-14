import Nav from '../components/Nav'
import CEOImg from '../assets/a2e4a3de-18bc-41df-81d0-913c6744b716.png'
import Footer from '../components/Footer'
import { FaAddressCard, FaBullseye } from 'react-icons/fa'
import { motion } from 'motion/react'

const About = () => {
  return (
    <div className="bg-white">
      <Nav />

      {/* Hero Section - About */}
      <section className="pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-pink/20 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                <img 
                  src={CEOImg} 
                  alt="Kemi Kouture CEO" 
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
                ABOUT <span className="text-gradient">US</span>
              </h1>
              <div className="w-20 h-1.5 bg-brand-pink mb-8 rounded-full"></div>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 font-medium">
                Kemi Kouture is a premier fashion brand dedicated to providing high-quality thrift and new female apparel at prices that empower.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Founded by <span className="font-bold text-gray-800">Adelunsi Folakemi</span>, our brand has evolved from a passion project into a leading fashion destination across Nigerian universities. We are built on the commitment to making style accessible without compromising on quality or authenticity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO & Mission Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-3xl shadow-xl border border-white/50"
            >
              <div className="w-14 h-14 bg-brand-pink/10 rounded-2xl flex items-center justify-center mb-6">
                <FaAddressCard className="text-brand-pink text-2xl" />
              </div>
              <h2 className="text-2xl font-black mb-4 uppercase tracking-tight text-gray-800">Our Visionary CEO</h2>
              <p className="text-gray-600 leading-relaxed">
                Meet <span className="font-bold text-brand-pink">Adelunsi Folakemi</span>, the creative force behind Kemi Kouture's success. With a deep passion for entrepreneurship and an eye for timeless style, she has shaped our mission to redefine campus fashion. Under her leadership, Kemi Kouture has become synonymous with quality, fast delivery, and exceptional customer service.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-3xl shadow-xl border border-white/50"
            >
              <div className="w-14 h-14 bg-brand-pink/10 rounded-2xl flex items-center justify-center mb-6">
                <FaBullseye className="text-brand-pink text-2xl" />
              </div>
              <h2 className="text-2xl font-black mb-4 uppercase tracking-tight text-gray-800">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                At Kemi Kouture, our mission is to deliver handpicked, premium thrift and new fashion items to women worldwide. we believe that every woman deserves to feel beautiful and confident, which is why we meticulously source each item to ensure it meets our high standards of quality and style.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About