import React from 'react'
import './FP.css'

import Leaf from '../../images/leaf.png'
// import Author from '../../images/ramesh.jpg'

const About = () => {
    return (
        <>
            <div className='aboutMainDiv'>
                <div className='aboutLeft'>
                    <h1>About</h1>
                    <img style={{ width: '4rem' }} src={Leaf} alt="leaf" />
                    <br />
                    <br />
                    <br />
                    <img style={{ width: '20rem', margin: '0 auto' }} src='data:image/png;base64,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' alt="ramesh" />
                </div>
                <div className='aboutRight'>
                    <p>
                        <b>Backbenchers Realty Private Limited </b>is a Private incorporated on 05 December 2019. It is classified as Non-govt company and is registered at Registrar of Companies, Hyderabad. Its authorized share capital is Rs. 100,000 and its paid up capital is Rs. 100,000. It is inolved in Real estate activities on a fee or contract basis. [This class includes buying, selling, renting managing and appraising real estate on a fee or contract basis. This class also includes the service activities provided by Munshi.]
                        <br />
                        Backbenchers Realty Private Limited's Annual General Meeting (AGM) was last held on 30 September 2022 and as per records from Ministry of Corporate Affairs (MCA), its balance sheet was last filed on 31 March 2022.
                        <br />
                       Directors of Backbenchers Realty Private Limited are Vuppala Nageshwargupta and Satyanarayana Vuppala.
                        <br />
                        Backbenchers Realty Private Limited's Corporate Identification Number is (CIN) U70200TG2019PTC137359 and its registration number is 137359.Its Email address is vuppala.nageshwar@outlook.com and its registered address is H.No.4-230, Pedda Amberpet Hayathnagar, Kuntloor HYDERABAD Rangareddi TG 501505 IN .

                    </p>
                </div>
            </div>
        </>
    )
}

export default About