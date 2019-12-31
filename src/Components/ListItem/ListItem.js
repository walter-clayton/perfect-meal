import React, { Component } from 'react'
import './ListItem.css'
import cooker from '../../cooker.svg'
export class ListItem extends Component {
    render() {
        return (
            <div className="list">
                <div id="list">
                    <div id="listTitle">
                        <h2>Meal Checkout</h2><img src={cooker} alt="cooker"></img>
                    </div>
                    <ul>
                        <li id="listItem">
                            <h3>Chicken doritos</h3>
                            <h4>45kcal</h4>
                            <div>
                            <p>Proteins : ea</p>
                            <p>Carbs : dad</p>
                            <p>Fat : dada</p>
                            <button>Delete</button>
                            </div>
                        </li>
                        <li id="listItem">
                            <h3>Chicken doritos</h3>
                            <h4>45kcal</h4>
                            <div>
                            <p>Proteins : ea</p>
                            <p>Carbs : dad</p>
                            <p>Fat : dada</p>
                            <button>Delete</button>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default ListItem
