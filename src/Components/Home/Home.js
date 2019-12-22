import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Home.css'
import Item from '../Item/Item'
import logo from  './dish.svg'

export class Home extends Component {
    constructor(){
        super()
        this.state={
            input:"",
            id:"",
            name:"",
            itemObj:{},

        }
    }

     search(){
        fetch('https://api.nutritionix.com/v1_1/search/'+this.state.input+'?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=bfa58bb1&appKey=32f09ffb63689c776bfa016ffc977997')
        .then((res)=>{
            if(res.status ===200){
                return res.json()
            }else{
                return false;
            }
        })
        .then(async (data)=>{
         await this.setState({
                id:data.hits[0].fields.item_id,
                name:data.hits[0].fields.item_name
            })
        })
        .then(()=>{
                 console.log(this.state)
            fetch('https://api.nutritionix.com/v1_1/item?id='+this.state.id+'&appId=bfa58bb1&appKey=32f09ffb63689c776bfa016ffc977997')
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
        })
    }
    render() {
        console.log(this.state)
        return (
            <div id="home">
                <h1 className="title" > The Perfect Meal</h1>
                <img id="logo" src={logo}></img>
                <TextField value={this.state.input} onChange={e => this.setState({input:e.target.value})} id="outlined-basic" label="examples:'egg','bacon',..." variant="outlined" color="secondary" />
                <Button variant="outlined" color="secondary" onClick={()=> this.search()}>
                    Search
                </Button>
                <Item />
            </div>
        )
    }
}

export default Home
