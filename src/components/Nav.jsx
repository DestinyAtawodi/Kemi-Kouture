import { motion, AnimatePresence } from 'motion/react'
import { FaBars, FaTimes, FaInstagram, FaTiktok } from 'react-icons/fa';
import { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Announcement Bar */}
      <div className="bg-brand-pink text-white py-2 px-4 text-center text-xs md:text-sm font-medium tracking-wide">
        <p className="flex items-center justify-center gap-4">
          <span>🛍️ Handpicked Thrift & New Fashion</span>
          <span className="hidden md:inline">|</span>
          <span>📍 Worldwide Delivery</span>
          <span className="hidden md:inline">|</span>
          <span className="font-bold">+2349016736464</span>
        </p>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 px-4 md:px-8 ${
        scrolled ? 'h-16 glass shadow-lg' : 'h-20 bg-white/90'
      } flex items-center justify-between`}>
        
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="https://res.cloudinary.com/kzekjix6/image/upload/f_auto,q_auto/54a9154a-bf29-4985-8a88-b2605e6cb5a6" 
            className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-brand-pink/20 group-hover:border-brand-pink transition-colors duration-300" 
            alt="Kemi Kouture Logo"
          />
          <span className="text-xl font-bold tracking-tight text-gray-800 hidden sm:block">
            KEMI <span className="text-brand-pink">KOUTURE</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path}
                className={`nav-link font-semibold uppercase text-sm tracking-widest ${
                  isActive(link.path) ? 'text-brand-pink nav-link-active' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Socials / Action */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://www.instagram.com/kemikouture24" className="text-gray-500 hover:text-brand-pink transition-colors">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.tiktok.com/@kemi_kouture1" className="text-gray-500 hover:text-brand-pink transition-colors">
            <FaTiktok size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-600 hover:text-brand-pink transition-colors"
          aria-label="Toggle Menu"
        >
          <FaBars size={24} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white z-[70] shadow-2xl p-8 flex flex-col"
            >
              <button
                onClick={toggleMenu}
                className="self-end p-2 text-gray-500 hover:text-brand-pink transition-colors mb-8"
              >
                <FaTimes size={28} />
              </button>

              <div className="mb-12">
                <img src="https://res.cloudinary.com/kzekjix6/image/upload/f_auto,q_auto/54a9154a-bf29-4985-8a88-b2605e6cb5a6" 
                 className="h-16 w-16 rounded-full mb-4 mx-auto" alt="Logo" />
                <h2 className="text-2xl font-bold text-center text-gray-800">
                  KEMI <span className="text-brand-pink">KOUTURE</span>
                </h2>
              </div>

              <ul className="space-y-6 flex-grow">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className={`block text-xl font-bold uppercase tracking-widest ${
                        isActive(link.path) ? 'text-brand-pink' : 'text-gray-700'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-gray-100 flex justify-center gap-6">
                 <a href="https://www.instagram.com/kemikouture24" className="text-gray-400 hover:text-brand-pink">
                    <FaInstagram size={24} />
                  </a>
                  <a href="https://www.tiktok.com/@kemi_kouture1" className="text-gray-400 hover:text-brand-pink">
                    <FaTiktok size={24} />
                  </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Nav