import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
  constructor(props){
    super(props);
    this.renderWeather = this.renderWeather.bind(this);
  }

  renderWeather(cityData) {
    const name = this.props.weather.city.name;

    return (
      <tr key={cityData.dt_txt}>
        <td>{name}</td>
      </tr>
    )
  }

  render() {
    if (!this.props.weather) {
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
          {this.props.weather.list.map(this.renderWeather)}
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
