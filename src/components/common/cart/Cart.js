import React, { useEffect, useState } from 'react';



const Cart=({visibility,num3,Product,total})=>{
    
   
    
        



    return(
        <div className={ `modal ${visibility===true?'visible':""}`}>
            
        <div className="c-box">
        
            
            
            
            {Product.map(({name,priceOfProduct,image},index)=> {
                
                
                
                return(<div className="i-box">
                <img src={image} alt='product-image '/>
                <p>{name}</p>
    
                <a className='i-price' href="#">Rs.{priceOfProduct}</a>
                </div>)
                
                }
                
                
                



                







            
            )
            }
            
            
            


        </div>
        
        <span  className='about-btn  checkout ' >Check Out</span>
        </div>
    )
}
export default Cart;