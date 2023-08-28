import React from 'react'
import './FP.css'
// import expImage1 from '../../images/about.jpg'
import Leaf from '../../images/leaf.png'


const Experience = () => {
    return (
        <>
            <div className='expMainDiv'>
                <div className='expImage'><img src='https://static.vecteezy.com/system/resources/thumbnails/008/124/777/small/real-estate-logo-house-logo-home-logo-sign-symbol-free-vector.jpg' alt='image1' />          <div className='expYears'><span className='span1'>3+ Years</span>of Dedicated Services</div> </div>

                <div className='expSlogans'>
                    <div className='slogan1'>  <span className='span2'>Backbenchers Realty Pvt Ltd <br /></span><span className='span3'><b>Our Philosophy</b></span><br /><img src={Leaf} alt /><br /><p><span className='span4'>"</span>A Quote<span className='span4'>"</span>Few good lines</p></div>
                    <div className='slogan1'><br />  <span className='span3'><b>Founder</b></span><br /> <img src={Leaf} alt /><br /><p><b>Vuppala Nageshwar Gupta</b> few good lines</p></div>
                </div>
            </div>
        </>
    )
}

export default Experience