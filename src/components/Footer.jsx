import Logo from '../assets/54a9154a-bf29-4985-8a88-b2605e6cb5a6.JPG'
import { FaInstagram, FaTiktok, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img src={Logo} className="h-14 w-14 rounded-full border-2 border-brand-pink/30 group-hover:border-brand-pink transition-all duration-300" alt="Kemi Kouture Logo" />
              <span className="text-2xl font-black tracking-tighter">
                KEMI <span className="text-brand-pink">KOUTURE</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-center md:text-left mb-6 font-medium">
              Elevating campus style with handpicked, premium thrift and new fashion items since 2024.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/kemikouture24" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-pink transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@kemi_kouture1" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-pink transition-colors duration-300">
                <FaTiktok size={20} />
              </a>
              <a href="https://wa.me/2349016736464" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-pink transition-colors duration-300">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold uppercase tracking-widest text-brand-pink mb-8">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors uppercase text-sm font-bold tracking-wider">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors uppercase text-sm font-bold tracking-wider">About Us</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors uppercase text-sm font-bold tracking-wider">Events</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors uppercase text-sm font-bold tracking-wider">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold uppercase tracking-widest text-brand-pink mb-8">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-brand-pink shrink-0" />
                <span className="text-sm font-medium">Redeemers University Ede, Osun State, Nigeria.</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-gray-400">
                <FaWhatsapp className="text-brand-pink shrink-0" />
                <span className="text-sm font-medium">+234 901 673 6464</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-gray-400">
                <FaEnvelope className="text-brand-pink shrink-0" />
                <span className="text-sm font-medium">hello@kemikouture.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold uppercase tracking-widest text-brand-pink mb-8">Join the Vibe</h3>
            <p className="text-gray-400 text-sm mb-6 font-medium">Be the first to know about new arrivals and exclusive campus deals.</p>
            <Link to="/contact">
              <button className="w-full bg-brand-pink hover:bg-brand-pink-dark text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 uppercase tracking-widest text-xs">
                Inquire Now
              </button>
            </Link>
          </div>

        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
            © {currentYear} KEMI KOUTURE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-brand-pink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-pink transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer