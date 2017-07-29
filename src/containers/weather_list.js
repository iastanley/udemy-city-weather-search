import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
  renderCityData(cityData) {
    const temp = cityData.list.map(data => data.main.temp);
    const humidity = cityData.list.map(data => data.main.humidity);
    const pressure = cityData.list.map(data => data.main.pressure);
    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td>
          <Sparklines height={120} width={180} data={temp}>
            <SparklinesLine color="red"/>
          </Sparklines>
        </td>
        <td>
          <Sparklines height={120} width={180} data={pressure}>
            <SparklinesLine color="green"/>
          </Sparklines>
        </td>
        <td>
          <Sparklines height={120} width={180} data={humidity}>
            <SparklinesLine color="blue"/>
          </Sparklines>
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
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
