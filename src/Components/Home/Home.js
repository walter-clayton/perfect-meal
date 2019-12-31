import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Home.css'
import Item from '../Item/Item'
import logo from  './dish.svg'
import Autocomplete from '@material-ui/lab/Autocomplete';
import ListItem from '../ListItem/ListItem'
export class Home extends Component {
    constructor(){
        super()
        this.state={
            input:"",
            id:"",
            name:"",
            itemObj:{},
            five:[],

        }
    }
     search(){
        fetch('https://api.nutritionix.com/v1_1/search/'+document.getElementById('free').value+'?brand_id=513fcc648110a4cafb90ca5e&results=0%3A20&cal_min=0&cal_max=50000&appId=bfa58bb1&appKey=32f09ffb63689c776bfa016ffc977997')
        .then((res)=>{
            if(res.status ===200){
                return res.json()
            }else{
                return false;
            }
        })
        .then((data)=>{
            //Five elements for search bar toDO
            // let i = 0;
            // let five = []
            // while(i<4){
            //     five.push(data.hits[i]);
            //     i++;
            // }
            // i=0
            // console.log(five)
            // five=[]

            //Setting the id for sending to Item Component
            console.log(data.hits[0])
         this.setState({
                id:data.hits[0].fields.item_id,
                name:data.hits[0].fields.item_name
            })
            this.find();
        })
    }

    find(){
            fetch('https://api.nutritionix.com/v1_1/item?id='+this.state.id+'&brand_name=USDA&appId=bfa58bb1&appKey=fc5f0b60ea3bd985a02603ac239c2c10')
                .then((res)=>{
                    if(res.status ===200){
                        return res.json()
                    }else{
                        return false;
                    }
                })
                .then((data,err)=>{
                    console.log(data)
                   try{this.setState({
                        item:{
                            cal:data.nf_calories,
                            prot:data.usda_fields.PROCNT.value,
                            fat:data.usda_fields.FAT.value,
                            glu:data.usda_fields.CHOCDF.value,
                            tot:data.usda_fields.PROCNT.value+data.usda_fields.FAT.value+data.usda_fields.CHOCDF.value    
                        }
                    })}
                    catch(err){
                        console.log(err);
                    } 
                })
    }
    getFive(value){
        
        this.setState({
            five:[]
        })
        console.log(value)
        fetch('https://api.nutritionix.com/v1_1/search/'+value+'?brand_id=513fcc648110a4cafb90ca5e&results=0%3A20&cal_min=0&cal_max=5000&appId=bfa58bb1&appKey=32f09ffb63689c776bfa016ffc977997')
        .then((res)=>{
            if(res.status ===200){
                return res.json()
            }else{
                return false;
            }
        })
        .then((data)=>{
            let five=[]
            for(var i=0;i<=5;i++){
                five.push(data.hits[i].fields.item_name)
            }
            this.setState({
                five:five,
                input:value
            })

        })
    }
    render() {
        console.log(this.state)
        return (
            <div id="home">
                <h1 className="title" > The Perfect Meal</h1>
                <h3 className="title2">Make yours</h3>
                <img id="logo" src={logo}></img>
                <div id="form">
                <Autocomplete
                    id="free"
                    freeSolo
                    options={this.state.five.map(item => item)}
                    renderInput={params => (
                        <TextField id="input"{...params} label="examples:'egg','bacon...'" onChange={(e)=> this.getFive(e.target.value)} margin="normal" color="secondary"  variant="outlined" />
                    )}
                />

                <Button variant="outlined" color="secondary" onClick={()=> this.search()}>
                    Search
                </Button>
                </div>
                <Item name={this.state.name} item={this.state.item} />
                <ListItem />
            </div>
        )
    }
}

export default Home
