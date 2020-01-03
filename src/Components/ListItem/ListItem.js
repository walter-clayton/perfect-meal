import React, { Component } from 'react'
import './ListItem.css'
import cooker from '../../cooker.svg'
export class ListItem extends Component {
    constructor(props){
        super(props)
        this.div =<h1>Salut</h1>;
        this.state={
            // list:this.props.list
            list:this.props.list
        }
    }

    checkout(){
        if(this.state.list.length>0){
            console.log("on rentre")
            let temp=<b></b>
            for(var i =0 ; i < this.state.list ; i++){
                temp=temp+<li id="listItem">
                <h3>{this.state.list[i].name}</h3>
                <h4> {this.state.list[i].cal} </h4>
                <div>
                <p>Proteins : {this.state.list[i].prot}</p>
                <p>Carbs : {this.state.list[i].glu}</p>
                <p>Fat : {this.state.list[i].fat} </p>
                <button key= {i}>Delete</button>
                </div>
            </li>;
            }
            this.div=temp;
            console.log(this.div)
        }
    }
    render() {
        const list = this.state.list.map((elem, index) => (
            
            <li key={index} id="listItem">
                     <h3>{elem.name}</h3>
                      <h4>{elem.cal}kcal</h4>
                      <div>{console.log(index)}
                      <p>Proteins : {elem.prot}g </p>
                      <p>Carbs : {elem.glu}g </p>
                      <p>Fat : {elem.fat}g </p>
                      <button onClick={() => this.props.delete(index)}>Delete</button>
                      </div>
                  </li>
            
        ))
        let totcal=0;
        let totprot=0;
        let totfat=0;
        let totglu=0;
        let total = this.state.list.map((elem,index)=>{
            totcal=totcal+elem.cal;
            totprot=totprot+elem.prot;
            totfat=totfat+elem.fat;
            totglu=totglu+elem.glu
        })
        console.log(this.state.list)
        return (
            <div>
            <div className="list">
                {/* {this.checkout()} */}
                <div id="list">
                    <div id="listTitle">
            
                         <h1>Meal Checkout</h1>
                         <br></br><img src={cooker} alt="cooker"></img>
                         
                    </div>
                    <ul id="ulItem">
                        {list}
                    </ul>
                    <h2>Meal informations</h2>
                    {/* <div id ="total">
                        <div >
                        <h3>total calories</h3>
                        <p className="totCal">{Math.floor(totcal)}kcal</p>
                        </div>
                        <div>
                            <h3>total proteins</h3>
                            <p className="totCal"> {Math.floor(totprot)} g</p>
                        </div>
                        <div >
                        <h3>total fat</h3>
                            <p className="totCal"> {Math.floor(totfat)} g</p>
                        </div>
                        <div>
                        <h3>total carbs</h3>
                            <p className="totCal"> {Math.floor(totglu)} g</p>
                        </div>
                    </div> */}
                </div>
                </div>
                <div id ="total">
                        <div >
                        <h3>total calories</h3>
                        <p className="totCal">{Math.floor(totcal)}kcal</p>
                        </div>
                        <div>
                            <h3>total proteins</h3>
                            <p className="totCal"> {Math.floor(totprot)} g</p>
                        </div>
                        <div >
                        <h3>total fat</h3>
                            <p className="totCal"> {Math.floor(totfat)} g</p>
                        </div>
                        <div>
                        <h3>total carbs</h3>
                            <p className="totCal"> {Math.floor(totglu)} g</p>
                        </div>
                    </div>
            </div>
        )
    }
}

export default ListItem
