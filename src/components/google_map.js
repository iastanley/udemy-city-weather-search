import React, { Component } from 'react';

class GoogleMap extends Component {
  // runs after component renders first time
  // this works even without a valid google maps api key
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div className="google-map" ref="map"></div>;
  }
}

export default GoogleMap;
