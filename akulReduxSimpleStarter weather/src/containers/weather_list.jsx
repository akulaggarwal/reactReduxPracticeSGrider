import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  constructor(props){
    super(props);
    this.renderWeather = this.renderWeather.bind(this);
  }

  renderWeather(cityData) {
    // const name = this.props.weather.city.name;
    const name = cityData.city.name;
    // const main = cityData.main;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    console.log('cityData obj:', cityData);
    return (
      <tr key={cityData.message}>
        <td>{name}</td>
        <td><Chart data={temps} color="orange" /></td>
        <td><Chart data={pressures} color="green" /></td>
        <td><Chart data={humidity} color="green" /></td>
      </tr>
    )
  }

  render() {
    if (!this.props.weather.length) {
      return <div>Enter a city</div>
    }
    console.log('????', this.props.weather);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>city</th>
            <th>Temp</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);
