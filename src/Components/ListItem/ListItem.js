import React, { Component } from 'react'
import './ListItem.css'
import cooker from '../../cooker.svg'
export class ListItem extends Component {
    constructor(props){
        super(props)
        this.state={
            list:this.props.list
        }
    }
    render() {
        console.log("state list" +this.state.list)
        return (
            <div className="list">
                <div id="list">
                    <div id="listTitle">
                        <h2>Meal Checkout</h2><img src={cooker} alt="cooker"></img>
                    </div>
                    <ul id="ulItem">
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
                    <h2>Meal informations</h2>
                    <div id ="total">
                        <div >
                            total calories
                            <p className="totCal">456kcal</p>
                        </div>
                        <div>
                            total proteins
                            <p className="totCal">44.6g</p>
                        </div>
                        <div >
                            total fat
                            <p className="totCal">32.3g</p>
                        </div>
                        <div>
                            total carbs
                            <p className="totCal">61.2g</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ListItem
