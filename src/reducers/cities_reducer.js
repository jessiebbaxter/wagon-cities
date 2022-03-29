export default function(state, action) {
	if (state === undefined) {
		return []
	}
	
	if (action.type === 'SET_CITIES') {
		// Return new state
		return action.payload;
	} else {
		// Return current state
		return state;
	}

	// // Usually we use the switch syntax
	// switch(action.type) {
	// 	case 'SET_CITIES':
	// 		return action.payload;
	// 	default:
	// 		return state;
	// }
}