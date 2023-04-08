import { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context'
import Services from './Services'
import Contact from "./Contact"
import About from "./About"


function Home() {

 

  // const data={
  //   name:"Codemon",
  //   image:"./images/hero.svg"
  // }

  const {updateHomePage}=useGlobalContext()

  useEffect(() => {
    updateHomePage()
  }, [])
  
  return <>
  <HeroSection />
  <Services/>
  <Contact/>
  </>
}

export default Home