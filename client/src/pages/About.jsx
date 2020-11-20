import React from 'react'

import Navbar from '../components/NavBar/Navbar'
import Drawer from '../components/Drawer/Drawer'
import AboutUs from '../components/AboutUs/AboutUs'

const About = (props) => {
  return (
    <div>
      <AboutUs />
      <Navbar redirect='/'/>
      <Drawer />
    </div>
  )
}

export default About
