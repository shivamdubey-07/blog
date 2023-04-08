import React from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context'
import { useEffect } from 'react'

function About() {

  // const data={
  //   name:"Shivam Dubey",
  //   image:"./images/about1.svg"

  // }

  const {updateAboutPage}=useGlobalContext()

  useEffect(() => {
   updateAboutPage()
  }, [])
  

  return <HeroSection/>
}

export default About