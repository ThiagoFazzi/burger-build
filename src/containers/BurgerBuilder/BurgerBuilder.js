import React, { Component } from 'react'
import axios from '../../axios-orders'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENT_PRICES = {
  salad: 0.4,
  bacon: 0.7,
  cheese: 0.5,
  meat: 1.3
}

class BurgerBuilder extends Component {
  state = { 
    ingredients: null,
    totalPrice: 4,
    purchaseble: false,
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount(){
    axios.get('https://react-my-burger-a2dff.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({ingredients: response.data})
      })
      .catch(error => {
        this.setState({error: true})
      })
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    //alert('You Continue')
    this.setState({loading: true})
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'John Peralta',
        address: {
          street: 'Main Street',
          zipCode: '8907aa',
          country: 'Netherlands'
        },
        email: 'jperalta@teste.com'
      },
      deliveryMethod: 'fastest'
    }

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false, purchasing: false})
      })
      .catch(error => {
        this.setState({loading: false, purchasing: false})
      })
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el
      },0)
      this.setState({purchaseble: sum > 0})
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount= oldCount + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
    this.updatePurchaseState(updatedIngredients)
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    if(oldCount <= 0) {
      return
    }
    const updatedCount= oldCount - 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceDeduction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDeduction
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
    this.updatePurchaseState(updatedIngredients)
  }

  render(){
    const disableInfo = {
      ...this.state.ingredients
    }
    for(let key in disableInfo){
      disableInfo[key] = disableInfo[key] <= 0
    }
    let orderSummary = null
    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />
    
    if(this.state.ingredients){
      burger = (
        <>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            purchaseble={this.state.purchaseble}
            ordered={this.purchaseHandler}
            disabled={disableInfo}
            price={this.state.totalPrice}/>
        </>
      )
      orderSummary = <OrderSummary
        price={this.state.totalPrice.toFixed(2)}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        ingredients={this.state.ingredients}/>
    }
    
    if(this.state.loading){
      orderSummary = <Spinner />
    }
    
    return(
      <>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios)