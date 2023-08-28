import React from 'react'
import './FP.css'
// import icon1 from '../../images/lorvenParadise_home.jpg'
// import icon2 from '../../images/airport.jpg'
// import icon3 from '../../images/home.jpg'

import Leaf from '../../images/leaf.png'

const VenturesList = () => {
    return (
        <>
            <div className='venturesMainDiv'>
                <span className='span2'>Backbenchers Realty Pvt Ltd<br /></span>
                <span className='span3'><b>Our Projects</b></span><br /><img src={Leaf} alt /> <br /><br /><br /><br />
                {/*######################################################################                                CARDS */}
                <div className='venturesListCards'>

                    <div className='venturesCard'>
                        <div className='iconDiv'><img src='https://static.vecteezy.com/system/resources/thumbnails/011/883/276/small/modern-graphic-apple-fruit-colorful-logo-good-for-technology-logo-fruits-logo-apple-logo-nutrition-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg' alt='icon1' /> </div>
                        <hr className='hh' />
                        <h3>project 1</h3>
                        <p>About project</p>
                        <button className='venturesMoreButton'>Know More</button>
                    </div>

                    <div className='venturesCard'>
                        <div className='iconDiv'><img src='https://static.vecteezy.com/system/resources/thumbnails/011/883/276/small/modern-graphic-apple-fruit-colorful-logo-good-for-technology-logo-fruits-logo-apple-logo-nutrition-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg' alt='icon1' /> </div>
                        <hr className='hh'/>
                        <h3>project 2</h3>
                        <p>About project</p>
                        <button className='venturesMoreButton'>Know More</button>
                    </div>

                    <div className='venturesCard'>
                        <div className='iconDiv'><img src='https://static.vecteezy.com/system/resources/thumbnails/011/883/276/small/modern-graphic-apple-fruit-colorful-logo-good-for-technology-logo-fruits-logo-apple-logo-nutrition-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg' alt='icon1' /> </div>
                        <hr className='hh'/>
                        <h3>project 3</h3>
                        <p>About project</p>
                        <button className='venturesMoreButton'>Know More</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default VenturesList