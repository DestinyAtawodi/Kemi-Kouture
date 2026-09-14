import Nav from '../components/Nav'
import event1 from '../assets/IMG_5596.jpeg'
import event2 from '../assets/PHOTO-2026-04-23-13-43-35.jpeg'
import event3 from '../assets/temp_image_F7AD0CFB-0AC8-4F63-8E89-9EB8324B9260.WEBP'
import event4 from '../assets/v14044g50000d7edio7og65ospbg79ag.MP4'
import Footer from '../components/Footer'
import { motion } from 'motion/react'

const Events = () => {
  const events = [
    { id: 1, type: 'image', src: event1, title: 'Campus Showcase' },
    { id: 2, type: 'image', src: event2, title: 'Fashion Pop-up' },
    { id: 3, type: 'image', src: event3, title: 'Thrift Festival' },
    { id: 4, type: 'video', src: event4, title: 'Behind the Scenes' },
  ]

  return (
    <div className="bg-white min-h-screen">
      <Nav />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-gray-900">
              OUR <span className="text-gradient">EVENTS</span>
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto uppercase tracking-widest text-sm font-bold">
              Capturing moments of style and community across Nigerian campuses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-3xl shadow-xl bg-gray-100 aspect-[3/4]"
              >
                {event.type === 'image' ? (
                  <img 
                    src={event.src} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                ) : (
                  <video 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onMouseOver={e => e.target.play()}
                    onMouseOut={e => e.target.pause()}
                  >
                    <source src={event.src} type="video/mp4" />
                  </video>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {event.title}
                  </p>
                  <p className="text-brand-pink-light text-xs uppercase tracking-widest mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    Kemi Kouture 2026
                  </p>
                </div>

                {event.type === 'video' && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white pointer-events-none">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/></svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 p-12 rounded-[3rem] bg-gray-900 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Stay Tuned!</h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Something exciting is always happening at Kemi Kouture. Follow our social media for announcements on upcoming campus tours and pop-up events.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <span className="px-6 py-2 bg-brand-pink/10 border border-brand-pink/30 rounded-full text-brand-pink text-sm font-bold uppercase tracking-widest">
                  Upcoming: October 2026
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Events