import React from 'react'
import Cta from '../components/Cta'
import Navbar from '../components/Navbar'
import Recomend from '../components/Recomend'
import Section1 from '../components/Section1'
import Service from '../components/Service'
import Testimonials from '../components/Testimonial'

function Home() {
  return (
    <div>
        <Navbar />
        <Cta />
        <Section1 />
        <Service />
        <Testimonials />
    </div>
  )
}

export default Home