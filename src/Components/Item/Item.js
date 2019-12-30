import React, { Component } from 'react'
import './Item.css'
import carbs from './wheat.svg'

export class Item extends Component {
constructor(){
    super()
    this.state={
        id:"",
        name:"",
        
    }
}

    render() {
        console.log("props item"+this.props.item)
        return (
            <div>
                <div id="header">
        {this.props.name !="" ? <h1>{ this.props.name}</h1> : <h1>Enter an Item</h1>}
        {this.props.item ? <p id="cal">{this.props.item.cal} kcal</p> : ""}  
                </div>
                <div id="nutriments">
                    <div>
                    <img src={carbs}></img>
                    <p>1. Carbs</p>
                    {this.props.item ? <p>{Math.floor((this.props.item.glu/this.props.item.tot)*100)}%</p> : ""}
                    </div>
                    <div>
                    <img src={carbs}></img>
                    <p>2. Proteins</p>
                    {this.props.item ? <p>{Math.floor((this.props.item.prot/this.props.item.tot)*100)}%</p> : ""}
                    </div>
                    <div>
                    <img src={carbs}></img>
                    <p>3. Fat</p>
                    {this.props.item ? <p>{Math.floor((this.props.item.fat/this.props.item.tot)*100)}%</p> : ""}
                    </div>
                </div>
            </div>
        )
    }   
}

export default Item
