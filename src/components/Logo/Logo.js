import React from 'react'
import classes from './Logo.module.css'
import burgerLogo from '../../assets/images/burger-logo.png'


const logo = (props) => (
  <div>
    <img src={burgerLogo} alt='Burger Shop' />
  </div>
)

export default logo