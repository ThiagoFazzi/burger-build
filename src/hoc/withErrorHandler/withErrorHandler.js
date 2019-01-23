import React from 'react'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (wrappedComponent) => {
  return (props) => {
    return (
      <>
        <wrappedComponent {...props}/>
      </>
    )
  }
}

export default withErrorHandler