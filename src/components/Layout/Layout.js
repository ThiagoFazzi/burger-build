import React from 'react'
import classes from './Layout.module.css'
import Toobar from '../Navigation/Toobar/Toobar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => {
  return(
    <>
      <Toobar/>
      <SideDrawer />
      <main className={classes.Content}>
        {props.children}
      </main>
    </>
  )
}

export default layout