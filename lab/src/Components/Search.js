import React from 'react';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = { city: ""};
        
    }


    searchData = () => {
        let city = document.getElementById("city-input").value;
        this.props.onSearchCityWeather(city);
    }

    render () {
        return (
            <div>
                <input id="city-input" type="text"></input>
                <button className="search-submit" onClick={this.searchData}>Search</button>
            </div>
            
        );
    }
}

export default Search;