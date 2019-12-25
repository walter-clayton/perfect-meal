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

find(){
    if(this.props.id==""){
        console.log("pas d'id")
    }else{
        console.log("id")
        fetch('https://api.nutritionix.com/v1_1/item?id='+this.props.id+'&appId=bfa58bb1&appKey=32f09ffb63689c776bfa016ffc977997')
            .then((res)=>{
                if(res.status ===200){
                    return res.json()
                }else{
                    return false;
                }
            })
            .then((data)=>{
                console.log(data)
            })
    }
}
    render() {
        this.find()
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
