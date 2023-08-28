import React from 'react'
import './FP.css'
import Leaf from '../../images/leaf.png'

const CompletedVenturesList = () => {
    return (
        <>
            <div className='completedVentures-Main-Div'>
                <div className='completedVentures-inner-div'>
                    <span className='span2'>Backbenchers Realty Pvt Ltd<br /></span>
                    <span className='span3'><b>Completed Projects</b></span><br />
                    <img src={Leaf} alt='imm' /><br />
                </div>

                <div className='completedVentures-inner-div'>
                    <ul className='completedVenturesUL'>
                        <h2>Location</h2>
                        <li>Project name</li>
                        {/* <li>LORVEN CITY - Nandigoan Village</li>
                        <li>LORVEN'S GOLD LEAF - Srinagar Colony, Hyderabad</li>
                        <li>TIRUMULA ENCLAVE - Srinagar Colony, Hyderabad</li>
                        <li>ANGEL HILLS @ GHATKESAR - Srinagar Colony, Hyderabad</li> */}
                    </ul>
                </div>
                <div className='completedVentures-inner-div'>
                <ul className='completedVenturesUL'>
                        <h2>Location</h2>
                        <li>Project name</li>
                        {/* <li>LORVEN'S FORTUNE HOMES - Visakhapatnam Atchuthapuram </li>
                        <li>LORVEN'S FORTUNE CASTLE - Srinagar Colony, Hyderabad</li>
                        <li>LORVEN'S HILAND - Atchuthapuram, Visakhapatnam</li>
                        <li>VENSAI TOWNSHIP - Visakhapatnam Atchuthapuram highway</li> */}
                    </ul>
                </div>
                </div>
        </>
    )
}

export default CompletedVenturesList