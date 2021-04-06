import React from 'react';

class SearchResult extends React.Component{
    render () {
        return (
            <div>
                <h1 className="location">{this.props.city}, {this.props.country}</h1>
                <h3 className="temperature">{this.props.temperature} &deg;</h3>
                <h3 className="status">{this.props.status}</h3>
                <h3 className="feels-like">Feels like {this.props.feelsLike} &deg;</h3>
            </div>
        );
    }
}

export default SearchResult;