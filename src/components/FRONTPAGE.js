import React from 'react'
import './FP COMPONENTS/FP.css'
import About from './FP COMPONENTS/About.js'
import CompletedVenturesList from './FP COMPONENTS/CompletedVenturesList.js'
import Experience from './FP COMPONENTS/Experience.js'
import FadedImage from './FP COMPONENTS/FadedImage.js'
import VenturesList from './FP COMPONENTS/VenturesList.js'
import Navbar from './NAVBAR/Navbar.js'
import Owl from './OWL CAROUSEL/Owl'
import arch from '../images/VangoorPics/Arch.jpg'

const FRONTPAGE = () => {
  return (
    <>
    <img className='bgImage' src={arch} alt='backgroundImage'/>
    <Navbar/>
    <Owl/>
    <About/>
    <Experience/>
    <VenturesList/>
    <FadedImage/>
    <CompletedVenturesList/>
    </>
  )
}

export default FRONTPAGE