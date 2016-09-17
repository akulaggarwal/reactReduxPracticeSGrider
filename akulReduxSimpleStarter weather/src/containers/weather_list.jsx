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
    // const main = cityData.main;
    let temp = cityData.list.map(weather => weather.main.temp);

    // let date = Date(cityData.dt);
    // console.log(Object.keys(date));
    console.log('cityData obj:', cityData);
    return (
      <tr key={cityData.message}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temp}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
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
