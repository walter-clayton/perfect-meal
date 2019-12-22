import React, { Component } from 'react'
import './Item.css'
import carbs from './wheat.svg'

export class Item extends Component {

    render() {
        return (
            <div>
                <div id="header">
                    <h1>Enter an Item</h1>
                    33%
                </div>
                <div id="nutriments">
                    <div>
                    <img src={carbs}></img>
                    <p>1. Carbs</p>
                    </div>
                    <div>
                    <img src={carbs}></img>
                    <p>2. Proteins</p>
                    </div>
                    <div>
                    <img src={carbs}></img>
                    <p>3. Fat</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item
