import Search from './Search';
import SearchResult from './SearchResult';

import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = { city: "London" || props.city, weather : {} };
    }

    componentDidMount(){
        this.getWeatherData(this.state.city);
    }

    getWeatherData = city => {
        const key = "0d819625de817ece48e21106f1a0b5b7";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

        axios.get(url).then(res => {
            console.log(res);
            if(res.status === 200){
                this.setState({ weather : res.data })
            }
        });
    };

    searchCity =  city => {
        this.setState({city});
        this.getWeatherData(city);

    }


    render() {

        let result;
        if(this.state.weather.main){
            result = <SearchResult city={this.state.weather.name}
                country={this.state.weather.sys.country}
                temperature={parseInt(this.state.weather.main.temp)}
                status={this.state.weather.weather[0].description}
                feelsLike={parseInt(this.state.weather.main.feels_like)}
              />;
        }

        return (
            <div>
                <Search onSearchCityWeather={this.searchCity} />
                {result}
            </div>
        );
        
    }
}

export default Weather;