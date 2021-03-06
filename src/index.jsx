// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import citiesReducer from './reducers/cities_reducer';
import activeCityReducer from './reducers/active_city_reducer';

// State and reducers
// Need to create one reducer for every key in the Redux State tree and combine
// those reducers to pass to and create the Store. e.g. cities = 1 x key
const reducers = combineReducers({
  // changeMe: (state = null, action) => state
  cities: citiesReducer,
  activeCity: activeCityReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
