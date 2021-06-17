import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const BuildControls = props => (
        <div className={classes.BuildControls}>
            <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.type}
                    label={ctrl.label} 
                    type={ctrl.type}
                    added={() => props.addIngredients(ctrl.type)}
                    removed={() => props.removeIngredients(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button 
                className={classes.OrderButton} 
                disabled={!props.purchasable}
                onClick={props.order}>
                    {props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}
            </button>
        </div>
);

export default BuildControls;