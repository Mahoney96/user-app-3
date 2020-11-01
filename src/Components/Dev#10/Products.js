import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { response } from 'express';

class Products extends Component {
    constructor(){
    super();

        this.state= {
        products: []
        };
    }

    componentDidMount(){
        axios.get().then(response=> {
            this.setState({products: response.data});
        });
    }

    render(){
        let products = this.state.products.map((products, index) => {
            if(products.image) {
                return (
                    <link key={index} to={`/details/${product.id}`}>
                        <img width="150" src={product.image} />
                    </link>
                );
            }
        });

        return(
            <div>
                <h1>Products</h1>
                {products}
            </div>
        );
    }
}

export default Products;