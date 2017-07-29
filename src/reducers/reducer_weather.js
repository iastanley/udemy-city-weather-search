import { FETCH_WEATHER } from '../actions';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_WEATHER:
      // returning list of city weather data
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
