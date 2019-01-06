import React, { Component } from 'react'
import classes from './Layout.module.css'
import Toobar from '../Navigation/Toobar/Toobar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  render(){
    return(
      <>
        <Toobar/>
        <SideDrawer />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </>
    )
  }
}

export default Layout