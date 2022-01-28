import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import Cart from '../cart/Cart'
import { HiMenuAlt2 } from 'react-icons/hi'

const Nav = ({ num2, scrollTo3, cartClickHandler }) => {
  // const [visible,setVisible]=useState(false)

  // const cartClickHandler=()=>{
  //     visible===true?setVisible(false):setVisible(true)
  // }
  const [menu, setMenu] = useState(false)

  const menuClickHandler = () => {
    menu === false ? setMenu(true) : setMenu(false)
  }
  const scrolltoProduct = () => {
    window.scrollTo({ top: 1500, behavior: 'smooth' })
  }
  const scrollToAbout = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' })
  }

  return (
    <div className='nav'>
      <div className='logo-container'>
        <div className='logo'>
          <a href='/'>ECOMERSE</a>
          <HiMenuAlt2 onClick={menuClickHandler} />
        </div>
      </div>

      <div className={`menu-container ${menu === true ? 'show-menu' : ''}`}>
        <div>
          <span className='about-btn ' onClick={scrollTo3}>
            Home
          </span>
        </div>
        <div>
          <span className='about-btn ' onClick={scrolltoProduct}>
            Products
          </span>
        </div>
        <div>
          <span className='about-btn ' onClick={cartClickHandler}>
            {' '}
            Cart
          </span>
        </div>
        <div>
          <span className='about-btn ' onClick={scrollToAbout}>
            About
          </span>
        </div>

        <div className='side-box'>
          <div className='search'>
            <GoSearch />
            <input placeholder='search...' type='text' />
          </div>
        </div>
      </div>

      {/* <Cart visibility={visible} num3={num2}/>  */}
    </div>
  )
}
export default Nav
