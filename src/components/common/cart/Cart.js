import React, { useEffect, useState } from 'react';



const Cart=({visibility,Product,onAdd})=>{

    console.log(Product)
    
   
    
        



    return(
        <div className={ `modal ${visibility===true?'visible':""}`}>
            
            
        <div className="c-box">
        <h2 style={{marginLeft:"232px"}}>Cart Item</h2>
        <div className="cart-product"></div>  
    


        
        <div    >    
            {Product.length===0 && <div>Cart is Empty</div>}    
        
        {Product.map((item)=>(
            <div key={item.id}    style={{ justifyContent:"space-around",display:"flex",width:"100%",marginBottom:"6px" }}>
                <div >{item.name}</div>
              
                
                
                <div style={{display:"flex"}}> <button onClick={()=>onAdd(item)} className="add" style={{background:"#3cd53f",border:"none", marginRight:"3px"}}>+</button>
                <div><button  className="add">-</button></div>
                
                
                </div>
                

                <div> <span style={{color:"red"}}>Qty</span> {item.qty} <span style={{color:"red"}}>X</span> ₹{item.price}</div>
            
            
            </div>
        ))}


</div >
        
            
            
            
          
            
            
            


        </div>
        
        <span  className='about-btn  checkout ' >Check Out</span>
        </div>
    )
}
export default Cart;