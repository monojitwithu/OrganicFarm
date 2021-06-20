import React from 'react';
import Nav from '../nav/Nav'
import image from '../images/organic-pattern-1.png'


const Header=({num1,scrollTo,cartClickHandler})=>{
    return(
        <div className="main">
            <Nav num2={num1} scrollTo3={scrollTo} cartClickHandler={cartClickHandler} />
            <div className='m-text'>
                 <img src={image} className="header-image" alt='image'/> 
                <h2>Eat <font>Clean</font>and<font>Green</font>Eat Organic</h2>
                <a className="m-btn" href="LO">Products</a>
            </div>

        

        </div>
    )
}



export default Header;