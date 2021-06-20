import React from 'react';



const Box=({image,name,price,triggerParentUpdate,addToCart,number,products})=>{

   
    

    return(
        <div className="p-box">
            <img src={image} alt='product-image '/>
            <p>{name}</p>

            <a className='price' href="#">Rs.{price}</a>
            <span className="buy-btn" onClick={()=>addToCart(number)}>Add to Cart</span>


        </div>
    )
}
export default Box;