import React, { Component } from 'react';
import Form from './Form';
import { v4 as uuid} from 'uuid';
import './Shoplist.css';

class Shoplist extends Component {


    constructor() {

        super();

        this.state = {
            items: [
                {
                    name: 'Potato',
                    qty: '5',
                    id:uuid()
                },
                {
                    name: 'Mangoes',
                    qty: '10',
                    id:uuid()
                },
                {
                    name: 'Oranges',
                    qty: '12',
                    id:uuid()
                }
            ]
        }

    }

    createItemHandler=(item)=>{
        item={
            ...item,
            id:uuid()
        }
        const newItem=[
            ...this.state.items,
            item
        ];
        this.setState({items:newItem});
    }

    deleteItemHandler=(id)=>{
      console.log(id);

      const newItem=this.state.items.filter((item)=>item.id!==id)
          
      
      this.setState({items:newItem});
    }

    render() {

        let listitem = this.state.items.map((item) => {
            
            
            let id=uuid();

            return <li key={id}
            onClick={()=>this.deleteItemHandler(item.id)}
            >Name:{item.name} | Quantity:{item.qty}</li>
        })


        return (

            < div >
                <h1>SHOP-LIST</h1>
                <ul>
                    {listitem}
                    
                </ul>
                 
                 <Form createitem={this.createItemHandler}/>
            </div >
        );
    }
}

export default Shoplist;