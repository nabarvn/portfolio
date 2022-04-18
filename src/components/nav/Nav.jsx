import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a 
        href='#' 
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : null}
      >
        <AiOutlineHome />
      </a>
      <a 
        href='#about' 
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : null}  
      >
        <AiOutlineUser />
      </a>
      <a 
        href='#experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : null}
      >
        <BiBook />
      </a>
      <a 
        href='#projects'
        onClick={() => setActiveNav('#projects')}
        className={activeNav === '#projects' ? 'active' : null}
      >
        <RiServiceLine />
      </a>
      <a 
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : null}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav