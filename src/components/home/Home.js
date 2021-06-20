import { useState } from "react"
import About from "../common/about/About"
import Cart from "../common/cart/Cart"
import Footer from "../common/footer/Footer"
import Header from "../common/header/Header"
import Product from "../product/Product"
import Box from '../productBox/Box'





const Home =()=>{
    const [visible,setVisible]=useState(false)

    const cartClickHandler=()=>{
        visible===true?setVisible(false):setVisible(true)
    }
     

    var [numf,setNumf]=useState(0);
    
    
    const updateThisCounter2=()=>{
        
        setNumf(numf =numf+1)
        
     

    }
    const  scrollToTop=()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    }

    
    return(
        <div className='main'>
        <Header num1={numf} scrollTo={scrollToTop} cartClickHandler={cartClickHandler} />
        <About/>
        <Product updateThisCounter={updateThisCounter2} visibleCart={visible}/>
         
        
       
        
        
        
        <Footer/>
        </div>
    )
}

export default Home;