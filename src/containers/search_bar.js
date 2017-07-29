import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // where fetchWeather should be dispatched
    this.props.fetchWeather(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          value={this.state.searchTerm}
          onChange={this.onInputChange}
          placeholder="Get a 5-day forcast in your favorite cities"
          className="form-control"/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchWeather}, dispatch);
};

// note that mapDispatchToProps MUST be second argument!!!
export default connect(null,mapDispatchToProps)(SearchBar);
