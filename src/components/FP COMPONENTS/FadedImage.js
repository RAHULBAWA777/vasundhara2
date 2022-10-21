import React from 'react'
import fadedImage from '../../images/VangoorPics/Arch.jpg'

import Leaf from '../../images/leaf.png'

const FadedImage = () => {
    return (
        <>
            <div className='fadedImageMainDiv'>
                <img src={fadedImage} alt='fadedImage' />
                <div className='blurDiv'>
                <div className='blurDivInner'>
                    <span className='span2'>Vasundhara Projects (P) Ltd<br /></span>
                    <span className='span3'><b>Why Vasundhara Projects (P) Ltd</b></span><br />
                    <img src={Leaf} alt /><br /><br /><br />
                    <p>Mr. K.V. Ramesh, a first generation entrepreneur, believes in maintaining transparency in business transactions and adhering to specified norms of legal, environmental and ethical practices. Under his leadership, Vasundhara has developed over 500 acres of planned projects and fulfilled the dreams of over 6,000 customers. His first project was at Tirupati in 1999, he also built another project in Bangalore. Later, in 2000, he developed a project in Ooty. All his constructions carry an air of authenticity with strong emphasis on environment safety, clear and legal titles and timely completion.</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default FadedImage