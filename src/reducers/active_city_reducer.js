 export default function(state, action) {
	if (state === undefined) {
		return null
	}
	
	if (action.type === 'SET_ACTIVE_CITY') {
		// Return new state
		return action.payload;
	} else {
		// Return current state
		return state;
	}
}