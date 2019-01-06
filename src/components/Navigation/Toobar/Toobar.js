import React from 'react'
import classes from './Toobar.module.css'
import Logo from '../../Logo/Logo'

const toobar = (props) => (
  <header className={classes.Toobar}>
    <div>MENU</div>
    <Logo />
    <ul>
      ...
    </ul>
  </header>
)

export default toobar