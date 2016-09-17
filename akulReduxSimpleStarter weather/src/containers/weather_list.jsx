import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends Component {
  constructor(props){
    super(props);
    this.renderWeather = this.renderWeather.bind(this);
  }

  renderWeather(cityData) {
    // const name = this.props.weather.city.name;
    const name = 'sf'
    const main = cityData.main;
    let temp = main.temp;

    // let date = Date(cityData.dt);
    // console.log(Object.keys(date));
    console.log('cityData obj:', cityData);
    return (
      <tr key={cityData.dt_txt}>
        <td>{name}</td>
        <td>{cityData.dt_txt}</td>
        <td>
        </td>
        <td>{main.pressure}</td>
        <td>{main.humidity}</td>
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
            <th>@</th>
            <th>Temp</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather[0].list.map(this.renderWeather)}
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
