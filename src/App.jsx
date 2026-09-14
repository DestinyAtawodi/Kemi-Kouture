import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Events from './pages/Events'
import Home from './pages/Home'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div className='min-h-screen'>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
       </Routes>
    </div>
  )
}

export default App
