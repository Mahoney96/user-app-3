import React, {Component } from "react";

class Search extends Component {
    constructor() {
    super();

    this.state = {
        filterString: " ",
        searchResults: ["MainLandingPage", "Home", "UserDashboard", "StoreDashboard", "About", "Collections"]
    };

}

handleChange(filter){
    this.setState({ filterString: filter });
}

    render(){
        let searchResultsToDisplay = this.state.searchResults
        .filter((elemtent, index) => {
            return Element.includes(this.state.filterString);
        });

        return (
            <div className="App">
                <input onChang={e => this.handleChange(e.target.value)} type="text" />
                {searchResultsToDisplay}
            </div>
        );

    }
}

export default Search;