import React, { useState } from 'react';
import image from '../images/organic-about-1.png'

const About=()=>{
    const[read,setRead]=useState("")
    const[hide,sethide]=useState("Read More")
    
    const readMoreClickHandler=()=>{
        hide==="Read More"?sethide("Hide"):sethide("Read More")
    read===``?setRead("organic grocery shop website using react js html and css and in the end i will show you how you can host your reactjs website on the live server."):setRead("")

    }
    return(
        <div className='about'>
            <div className="about-img">
                <img src={image} alt="img"/>

                </div>
                <div className="about-text">
                    
                    <h3>Fresh Food,Simply<font>Delicious</font></h3>
                        <p>
                        In This Video We Are Going To Make an E-commerce 
                        organic grocery shop website using react js html and 
                        css and in the end i will show you how you 
                        can host your reactjs website on the live server.
                        {read}

                        </p>
                            
                        <span  className='about-btn' onClick={readMoreClickHandler}>{hide}</span>

                </div>


            </div>
        
    )
}
export default About;