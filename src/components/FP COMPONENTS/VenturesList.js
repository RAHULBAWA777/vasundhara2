import React from 'react'
import './FP.css'
import icon1 from '../../images/lorvenParadise_home.jpg'
import icon2 from '../../images/airport.jpg'
import icon3 from '../../images/home.jpg'

import Leaf from '../../images/leaf.png'

const VenturesList = () => {
    return (
        <>
            <div className='venturesMainDiv'>
                <span className='span2'>Vasundhara Projects (P) Ltd<br /></span>
                <span className='span3'><b>Current Ventures</b></span><br /><img src={Leaf} alt /> <br /><br /><br /><br />
                {/*######################################################################                                CARDS */}
                <div className='venturesListCards'>

                    <div className='venturesCard'>
                        <div className='iconDiv'><img src={icon1} alt='icon1' /> </div>
                        <hr className='hh' />
                        <h3>Lorven's Paradise</h3>
                        <p>Lorven's Paradise fulfills your aspirations to get away from the hustle-bustle of city's life, yet be close to its reverberating energy and innumerable conveniences.</p>
                        <button className='venturesMoreButton'>Know More</button>
                    </div>

                    <div className='venturesCard'>
                        <div className='iconDiv'><img src={icon2} alt='icon1' /> </div>
                        <hr className='hh'/>
                        <h3>Lorven City</h3>
                        <p>Lorven City is DTCP approved layout; done up in two phases. Each of these completed phases has sold over 1,000 plots. These phases are conceptualized to be modern self-contained residential townships. </p>
                        <button className='venturesMoreButton'>Know More</button>
                    </div>

                    <div className='venturesCard'>
                        <div className='iconDiv'><img src={icon3} alt='icon1' /> </div>
                        <hr className='hh'/>
                        <h3>Lorven's Gold Leaf</h3>
                        <p>Lorven City is DTCP approved layout; done up in two phases. Each of these completed phases has sold over 1,000 plots. These phases are conceptualized to be modern self-contained residential townships.</p>
                        <button className='venturesMoreButton'>Know More</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default VenturesList