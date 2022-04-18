import React from 'react'
import './header.css'
import CTA from './CTA'
import Nabarun from '../../assets/nabarun.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Nabarun</h1>
        <h5 className='text-light'>Frontend Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Nabarun}/>
        </div>
        <a className='scroll__down' href='#contact'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header