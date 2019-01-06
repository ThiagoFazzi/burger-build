import React, { Component } from 'react'
import classes from './Layout.module.css'
import Toobar from '../Navigation/Toobar/Toobar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

  state = {
    showSideDrawer: true
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggleClickedHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render(){
    return(
      <>
        <Toobar drawerToggleClicked={this.sideDrawerToggleClickedHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </>
    )
  }
}

export default Layout