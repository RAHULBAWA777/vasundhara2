import React from 'react'
import "./owl.css"
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import owlImage1 from '../../images/VangoorPics/Arch.jpg'
import owlImage2 from '../../images/VangoorPics/100FT ROAD 1.jpg'
import owlImage3 from '../../images/VangoorPics/100FT ROAD 2.jpg'


const Owl = () => {
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true,
    nav:false,
    lazyLoad:true,
  };

  return (
    <div className='carous'>
    <OwlCarousel options={options} >
      <div className='carouselDivs' style={{height:"90vh"}}><img src={owlImage1} alt="image1"  /></div>
      <div className='carouselDivs' style={{height:"90vh"}}><img src={owlImage2} alt="image1"  /></div>
      <div className='carouselDivs' style={{height:"90vh"}}><img src={owlImage3} alt="image1"  /></div>
    </OwlCarousel>
    </div>
  )
}

export default Owl