import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import Header from './components/header/Header';

// {name:"Cote D'Or Chocolate", price:10, imageUrl:'https://images-na.ssl-images-amazon.com/images/I/51Q31wGsJ8L.jpg' }, 
// {name:'Vieux Lille', price:10, imageUrl:'https://c1.staticflickr.com/4/3729/12406584123_2001af1ef8_b.jpg'}, 
// {name:'Baguette', price:2, imageUrl:'https://upload.wikimedia.org/wikipedia/commons/f/f5/Baguettes_-_stonesoup.jpg'}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: '',
      imageUrl:'',
      inventory: []
    }

    this.getInventory = this.getInventory.bind(this);
    
  }

  componentDidMount() {
    this.getInventory()
  }

  getInventory() {
    axios.get('/api/inventory')
      .then(res => {
        this.setState({inventory: res.data});
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form getInventory={this.getInventory} />
      </div>
    );
  }
}

export default App;
