import React from 'react'
import Navbar from './Navbar'
import Section1 from './landingpage_sections/Section1'
import Section2 from './landingpage_sections/Section2'
import Section3 from './landingpage_sections/Section3'
import Section4 from './landingpage_sections/Section4'
import Section5 from './landingpage_sections/Section5'
import Marketing from './landingpage_sections/Marketing'
import Footer from './landingpage_sections/Footer'


function LandingPage() {
  return (

    <div>
        <Navbar/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Marketing />
        <Footer />
    </div>

  )
}

export default LandingPage