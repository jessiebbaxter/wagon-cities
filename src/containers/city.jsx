import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class City extends Component {
	handleClick = () => {
		// Create Redux action
		this.props.setActiveCity(this.props.city);
	}

	render() {
		return (
			<div className="card-city" onClick={this.handleClick}>
				<h3>{this.props.city.name}</h3>
			</div>
		);
	}
}

// Makes Store state availabe to props. Should return props you want to update
function mapStateToProps(state) { 
	return {
		activeCity: state.activeCity 
	};
}

// Binds actions to the props of the component
function mapDispatchToProps(dispatch) { 
	return bindActionCreators(
    { setActiveCity: setActiveCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);