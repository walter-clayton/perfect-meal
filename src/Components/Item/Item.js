import React, { Component } from 'react'
import './Item.css'
import carbs from './wheat.svg'
import protein from './proteins.svg'
import fat from './candy.svg'
import Button from '@material-ui/core/Button';
export class Item extends Component {
constructor(){
    super()
    this.state={
        id:"",
        name:"",
        list:[]
        
    }
}

    render() {
        return (
            <div id="cont">
                <div id="header">
        {this.props.name !="" ? <h1>{ this.props.name}</h1> : <h1>Enter an Aliment</h1>}
        {this.props.item ? <p id="cal">{this.props.item.cal} kcal</p> : ""}  
                </div>
                <div id="nutriments">
                    <div>
                    <img src={carbs}></img>
                    <p>Carbs</p>
                    {this.props.item ? <p>{Math.floor((this.props.item.glu/this.props.item.tot)*100)}%</p> : ""}
                    </div>
                    <div>
                    <img src={protein}></img>
                    <p>Proteins</p>
                    {this.props.item ? <p>{Math.floor((this.props.item.prot/this.props.item.tot)*100)}%</p> : ""}
                    </div>
                    <div>
                    <img src={fat}></img>
                    <p>Fat</p>
                    {this.props.item ? <p>{Math.floor((this.props.item.fat/this.props.item.tot)*100)}%</p> : ""}
                    <Button className="addBtn" variant="outlined" color="default" onClick={()=> this.props.add()}>
                    Add to meal
                    </Button>
                    </div>
                </div>
            </div>
        )
    }   
}

export default Item
