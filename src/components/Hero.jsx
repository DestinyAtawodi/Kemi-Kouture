import HeroImage from '../assets/pink-podium-with-gift-box-shopping-trolley-product-sale-banner-presentation-3d-background.png'
import { motion } from 'motion/react';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-brand-pink/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-pink/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter text-gray-900 mb-6 uppercase">
              KEMI <br />
              <span className="text-gradient">KOUTURE</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 font-medium max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed uppercase tracking-wide">
              Delivering Beautiful & Affordable Womens Wear All Across Nigerian Campuses.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a 
                href='https://chat.whatsapp.com/FlO624DrgysJIrmReDl1ni'
                className="group relative"
              >
                <button className="bg-brand-pink hover:bg-brand-pink-dark text-white font-bold py-5 px-10 rounded-full flex flex-row items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-105 active:scale-95 uppercase tracking-widest text-sm">
                  Join Our Community <FaWhatsapp className="ml-3 text-xl group-hover:animate-bounce" />
                </button>
                <div className="absolute inset-0 bg-brand-pink rounded-full blur-xl -z-10 opacity-30 animate-pulse"></div>
              </a>
              
              <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                🛍️ Over 1,000+ Happy Customers
              </p>
            </div>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div 
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative z-10">
             <img 
              src={HeroImage} 
              alt="Premium Thrift Showcase" 
              className="w-full h-auto drop-shadow-[0_35px_35px_rgba(244,114,182,0.3)] hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Accent circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-pink/10 rounded-full -z-10 animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border border-dashed border-brand-pink/20 rounded-full -z-10 animate-[spin_30s_linear_infinite_reverse]"></div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero