import React, { Component } from 'react'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  
    render(){
      const ingredientsSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return(
          <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
          </li>
        )
      })

      return(
        <>
          <h3>Your Order</h3>
          <p>The delicious burger with the following ingredients:</p>
          <ul>
            {ingredientsSummary}
          </ul>
          <p><strong>Total price: {this.props.price}</strong></p>
          <p>Continue to checkout?</p>
          <Button btnType='Danger' clicked={this.props.purchaseCancelled}>CANCEL</Button>
          <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </>
      )
    }


}

export default OrderSummary