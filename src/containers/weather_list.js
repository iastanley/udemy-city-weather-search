import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {
  constructor(props) {
    super(props);

    this.UNITS = {
      temp: 'F',
      pressure: 'hPa',
      humidity: '%'
    }
    this.renderCityData = this.renderCityData.bind(this);
  }

  renderCityData(cityData) {
    const temp = cityData.list.map(data => data.main.temp);
    const humidity = cityData.list.map(data => data.main.humidity);
    const pressure = cityData.list.map(data => data.main.pressure);

    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td>
          <Chart data={temp} color="red" unit={this.UNITS.temp}/>
        </td>
        <td>
          <Chart data={pressure} color="green" unit={this.UNITS.pressure}/>
        </td>
        <td>
          <Chart data={humidity} color="blue" unit={this.UNITS.humidity}/>
        </td>
      </tr>
    );
  }

  render() {
    console.log(this.props.weather);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature ({this.UNITS.temp})</th>
            <th>Pressure ({this.UNITS.pressure})</th>
            <th>Humidity ({this.UNITS.humidity})</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderCityData)}
        </tbody>
      </table>
    );
  }
}

// consider breaking your weather data down into separate props
const mapStateToProps = ({ weather }) => ({
  weather
})

export default connect(mapStateToProps)(WeatherList);
