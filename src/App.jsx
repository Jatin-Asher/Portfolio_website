import React from 'react'
import Navbar  from './components/Navbar'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App