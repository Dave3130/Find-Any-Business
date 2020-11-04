import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

import Yelp from '../../util/Yelp';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            businesses: []
        };

        this.searchYelp = this.searchYelp.bind(this);
    }

    searchYelp(term, location, sortBy) {
        Yelp.search(term, location, sortBy).then(businesses => {
            this.setState({ businesses: businesses });
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Find any Business <img src={require('./favicon.ico')} style={{ width: "2rem", marginTop: "0.3rem" }} /></h1>

                <SearchBar searchYelp={this.searchYelp} />
                {this.state.businesses ?
                    <BusinessList businesses={this.state.businesses} />
                    :
                    <div style={{ textAlign: "center", padding: "7rem 0px" }}>
                        <h2>Result Not Found <span role="img" arial-label="">🧐</span></h2>
                        <p>Please check you entered correct input <span role="img" arial-label="">🤨</span></p>
                        <p><a href="https://www.yelp.com/developers/documentation/v3/supported_locales">List</a> of countries supported. Indian places are not supported.</p>

                    </div>
                }
            </div>
        );
    }
}

export default App;