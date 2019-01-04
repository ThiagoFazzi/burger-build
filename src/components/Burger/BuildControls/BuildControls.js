import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Meat', type: 'meat'},
  {label: 'Cheese', type: 'cheese'}
]

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
    <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(crtl => (
        <BuildControl 
          key={crtl.label} 
          label={crtl.label}
          added={() => props.ingredientAdded(crtl.type)}
          removed={() => props.ingredientRemoved(crtl.type)}
          disabled={props.disabled[crtl.type]}
        />
      ))}
    </div>
  )
}

export default buildControls