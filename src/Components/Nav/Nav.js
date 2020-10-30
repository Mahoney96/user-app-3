import React, { Component } from "react";

class Nav extends Component {
    constructor() {
        super();

        this.state = {
            navMenu: ["Home", "Store", "User", "About", "Collections"]
        };
    }

    render(){
        let navMenuToDisplay = this.state.navMenu.map((element, index) => {
            return <h2 key={index}>{element}</h2>;
        });

        return <div className="Nav">{navMenuToDisplay}</div>;
    }
}

export default Nav;


