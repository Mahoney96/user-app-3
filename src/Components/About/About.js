import { render } from '@testing-library/react';
import React, { Component } from 'react';

class About extends Component {
        constructor() {
                super();

                this.state = { 
                        message: ""

                };
        }

        handleChange(value) {
                this.setstate({ message: value });
        }
        render(){
        return (
         <div className="App">
                <input onChange={e => this.handleChange(e.target.value)} type="text"/>
                <p>{this.state.message}</p>
                </div>
                );       
        }
}

export default About;




   