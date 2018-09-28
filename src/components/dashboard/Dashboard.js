import React, { Component } from 'react';
import Product from '../product/Product';

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    let inventory = this.props.inventory.map(product => {
      const { name, price, imageUrl } = product;
      return <Product name={product.name} price={product.price} image={product.imageUrl} />
    })
    return (
      <div className='Dashboard'>
        <h2>Dashboard</h2>
        {inventory}
      </div>
    );
  }
}

