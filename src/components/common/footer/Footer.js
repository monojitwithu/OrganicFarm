import React from 'react'

const Footer = () => {
  return (
    <div className='subscribe-container'>
      <h3>Subscribe for latest Products</h3>
      <div className='subscribe-input'>
        <input placeholder='Example@email.com' />
        <a className='subscribe-btn' href='#'>
          Send
        </a>
      </div>
    </div>
  )
}
export default Footer
