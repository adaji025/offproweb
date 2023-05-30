import AboutHero from '@/components/About/AboutHero'
import Innovation from '@/components/About/Innavation'
import Partners from '@/components/About/Partners'
import Product from '@/components/About/Product'
import Team from '@/components/About/Team'
import Download from '@/components/Home/Download'
import React from 'react'

const About = () => {
  return (
    <div>
      <AboutHero />
      <Product />
      <Partners />
      <Team />
      <Innovation />
      <Download />
    </div>
  )
}

export default About
