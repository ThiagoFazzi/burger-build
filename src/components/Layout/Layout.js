import React from 'react'
import classes from './Layout.module.css'
import Toobar from '../Navigation/Toobar/Toobar'

const layout = (props) => {
  return(
    <>
      <Toobar/>
      <main className={classes.Content}>
        {props.children}
      </main>
    </>
  )
}

export default layout