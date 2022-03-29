import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

import City from './city'

class CityList extends Component { 

	componentWillMount() {
		// Dispatches an action to update the Redux State tree
		this.props.setCities();
	}

	render() {
		return (
			<div className="cities">
        {this.props.cities.map( (city, index) => 
        	<City
						key={index}
        		city={city}
        	/>)}
      </div>
		); 
	}
}

// Binds actions to the props of the component
// Redux passess dispatch
function mapDispatchToProps(dispatch) { 
	return bindActionCreators(
    { setCities: setCities },
		dispatch 
	);
}

// Makes Store state availabe to props. Should return props you want to update
function mapStateToProps(state) { 
	return {
		cities: state.cities 
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);


