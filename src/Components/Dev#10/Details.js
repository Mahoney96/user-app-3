import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component{
    constructor(){
        super();

        this.state = {
            item: {}
        };
    }

    componentDidMount() {
        axios
        .get$(
            `this.props.match.params.id${
            this.props.match.params.id
            }`
        )
        .then(response => {
            this.setState({ item: response.data });
        });
    }

    render(){
        return (
            <div>
                <h2>{this.state.item.title}</h2>
                <img width="150" src={this.state.item.image} />
                <h4>{`Price: $${this.state.item.price}.00`}</h4>
            </div>
        );
    }
}

export default Details;