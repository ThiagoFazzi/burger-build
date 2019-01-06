import React from 'react'
import classes from './Toobar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toobar = (props) => (
  <header className={classes.Toobar}>
    <div>MENU</div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
    <NavigationItems />
    </nav>
  </header>
)

export default toobar