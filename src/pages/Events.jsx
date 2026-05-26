import React from 'react'
import Nav from '../components/Nav'
import event1 from '../assets/IMG_5596.jpeg'
import event2 from '../assets/PHOTO-2026-04-23-13-43-35.jpeg'
import event3 from '../assets/temp_image_F7AD0CFB-0AC8-4F63-8E89-9EB8324B9260.WEBP'
import event4 from '../assets/v14044g50000d7edio7og65ospbg79ag.MP4'
import Footer from '../components/Footer'

const Events = () => {
  return (
    <div>

      <Nav />
        <h1 className='text-4xl font-bold text-center mt-10 text-white'>Events</h1>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
          <img src={event1} alt="Event 1" className='w-full h-auto' />
          <img src={event2} alt="Event 2" className='w-full h-auto' />
          <img src={event3} alt="Event 3" className='w-full h-auto' />
          <video controls className='w-full h-auto'>
            <source src={event4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className='text-center mt-10 text-white mt-10 mb-20'>
          <h2 className='text-2xl font-bold mb-4'>Upcoming Events!</h2>
          <p className='text-lg'>Stay tuned for more exciting events and activities. Future updates will be posted here!</p>
        </div>
        <Footer />
    </div>
  )
}

export default Events