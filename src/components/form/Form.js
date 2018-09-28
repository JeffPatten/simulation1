import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: '',
            imageUrl: ''
        }
        this.handleAddImage = this.handleAddImage.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    handleAddName = (event) => {
        this.setState({ name: event.target.value })
    }

    handleAddPrice = (event) => {
        this.setState({ price: event.target.value })
    }

    handleAddImage(event) {
        this.setState({ imageUrl: event.target.value })
    }

    resetState() {
        this.setState({ name: '', price: '', imageUrl: '' })
    }

    addProduct( {getInventory} ) {
        
        axios.post('/api/product', (this.state.name, this.state.price, this.state.imageUrl))
            .then( () => {
                getInventory();
                this.cancel();
            })
    }

    render() {
        return (
            <div className='Form'>
                <h1>Form</h1>
                <div className='user input'>
                    <input value={this.state.name} type='text' placeholder='name' onChange={this.handleAddName}></input>
                    <input value={this.state.price} type='number' placeholder='price' onChange={this.handleAddPrice}></input>
                    <input value={this.state.imageUrl} type='text' placeholder='imageUrl' onChange={this.handleAddImage}></input>
                    <button onClick={this.resetState}>Cancel</button>
                    <button onClick={this.addProduct}>Add to Inventory</button>
                </div>
            </div>
        );
    }
}
export default Form;