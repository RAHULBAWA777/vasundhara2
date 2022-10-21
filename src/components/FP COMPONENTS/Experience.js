import React from 'react'
import './FP.css'
import expImage1 from '../../images/about.jpg'
import Leaf from '../../images/leaf.png'


const Experience = () => {
    return (
        <>
            <div className='expMainDiv'>
                <div className='expImage'><img src={expImage1} alt='image1' />          <div className='expYears'><span className='span1'>40+ Years</span>of Dedicated Services</div> </div>
       
                <div className='expSlogans'>
                <div className='slogan1'>  <span className='span2'>Vasundhara Projects (P) Ltd<br/></span><span className='span3'><b>Our Philosophy</b></span><br/><img src={Leaf} alt/><br/><p><span className='span4'>"</span>Living is not just leading the Life<span className='span4'>"</span>- is reflected in all our projects. Projects like Tirumala Enclave, Lorven City Phase - I & II, Lorven's Paradise Phase - I & II, Lorven's Fortune Club, Vensai Township, Lorven's Hi Land and Lorven's Residencia etc stand testimony to this fact.</p></div>
                <div className='slogan1'><br/>  <span className='span3'><b>Founder</b></span><br/> <img src={Leaf} alt/><br/><p><b>Chairman and Managing Director Mr. K.V. Ramesh (Ramesh V Katragadda)</b> a first generation entrepreneur, believes in maintaining transparency in business transactions and adhering to specified norms of legal, environmental and ethical practices. Under his leadership, Vasundhara has developed over 500 acres of planned projects and fulfilled the dreams of over 6,000 customers. His first project was at Tirupati in 1999, he also built another project in Bangalore. Later, in 2000, he developed a project in Ooty. All his constructions carry an air of authenticity with strong emphasis on environment safety, clear and legal titles and timely completion.</p></div>
                </div>
            </div>
        </>
    )
}

export default Experience