import React, { useState } from 'react';
import Box from '../productBox/Box'
import image1 from '../common/images/organic-pro-1.jpg'
import Cart from '../common/cart/Cart';


const Product=({updateThisCounter,visibleCart})=>{
    const [cart,setCart]=useState([])
 let total=0
    


    




    const [products]=useState([
        {   _id:1,
            priceOfProduct:100,
            image:image1,
            name:"Water Melon"
        },
        {   _id:2,
            priceOfProduct:10,
            image:image1,
            name:" Melon"
        },
        {   _id:3,
            priceOfProduct:30,
            image:image1,
            name:"Water "
        },{ _id:4,
            priceOfProduct:10,
            image:image1,
            name:"Water Melon"
        }
    ])

    // const addToCart=(product)=>{
    //     setCart([...cart,product])
        
    // }

     const addToCart = (id) =>{
         let total=0;


        cart.forEach(({priceOfProduct})=>{
            total+=priceOfProduct

        })

        console.log(total)
        
        
         
        
        // const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })


        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
             setCart([...cart,...data])
        }else{
            window.alert("The product has been added to cart.")
        }

       


    }

   



    
    return(
        <div className="product">
            <div className='p-heading'>
                <h3>New Organic Product</h3>
            </div>
            <div className="product-container">
            <Box  triggerParentUpdate={updateThisCounter}  price={100} image={image1}  name={"Mellon"}/>
            {products.map((product,index)=>{
                
                return(


            <Box price={product.priceOfProduct} image={product.image}  name={product.name} number={index+1} addToCart={addToCart} products={products}/>
            )})}
            
            

            </div>

            <Cart visibility={visibleCart} Product={cart}/>
            
            


        </div>
    )
}
export default Product;