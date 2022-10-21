import React from 'react'
import './FP.css'

import Leaf from '../../images/leaf.png'
import Author from '../../images/ramesh.jpg'

const About = () => {
    return (
        <>
            <div className='aboutMainDiv'>
                <div className='aboutLeft'>
                    <h1>About</h1>
                    <img style={{ width: '4rem' }} src={Leaf} alt="leaf" />
                    <br/>
                    <br/>
                    <br/>
                    <img style={{ width: '20rem', margin: '0 auto' }} src={Author} alt="ramesh" />
                </div>
                <div className='aboutRight'>
                    <p>
                       <b> Vasundhara Projects (P) Ltd </b>is a premier real estate development company with more than a decade of rich experience in execution of landmark projects across the length and breadth of Hyderabad. Founded in <b>2002 by Mr. K. V. Ramesh</b>, Vasundhara has carved a permanent niche for itself by adopting quality system standards and meeting people's aspirations and desire for a comfortable lifestyle. Our goal is to provide quality plots with international standards and enhance the quality of life of our customers.
                        <br />
                        Our mode of operation and aggressive pricing give you industry-leading performance at a reasonable and highly competitive cost. The organization's impeccable track record is the result of a client-oriented approach and an unwavering commitment to complete customer satisfaction.
                        <br />
                        Our entrepreneurial approach to real estate property investment, professionalism and vision has been instrumental in creating world class living for our customers. In the process of growth and change, Vasundhara has become synonymous with quality, reliability, high professional standards and long-lasting customer relationships.
                        <br />
                        All Vasundhara ventures are <b>approved by DTCP </b> and layouts are designed in accordance with 100% Vaasthu. Through our one-of-a-kind projects, we constantly try to set benchmarks in quality plots and upgraded amenities.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About