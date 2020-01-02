import React, { Component } from 'react'
import './ListItem.css'
import cooker from '../../cooker.svg'
export class ListItem extends Component {
    constructor(props){
        super(props)
        this.state={
            // list:this.props.list
            list:[
                {
                    name:"egg",cal:243,prot:34
                },
                {
                    name:"egg",cal:243,prot:34
                },
                {
                    name:"egg",cal:243,prot:34
                },
            ]
        }
    
        
    }

    render() {
        const obj=  <li id="listItem">
        <h3>Chicken doritos</h3>
        <h4>45kcal</h4>
        <div>
        <p>Proteins : ea</p>
        <p>Carbs : dad</p>
        <p>Fat : dada</p>
        <button>Delete</button>
        </div>
    </li>;
        console.log("state list" +this.state.list)
        return (
            <div className="list">
                <div id="list">
                    <div id="listTitle">
                         <h2>Meal Checkout</h2><img src={cooker} alt="cooker"></img>
                    </div>
                    <ul id="ulItem">
                 {/* {this.state.list.forEach(element,index => {
                     return  (                    <li id="listItem">
                     <h3>{element.name}</h3>
                      <h4>{element.cal}kcal</h4>
                      <div>
                      <p>Proteins : {element.prot} </p>
                      <p>Carbs : {element.glu} </p>
                      <p>Fat : {element.fat} </p>
                      <button key={index}>Delete</button>
                      </div>
                  </li>);
                 })} */}
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
