export default function reducer(state, action) {
	switch (action.type) {
		case "update-state":
			return {
				...state,
				...action.payload.state,
			};
		case "start-game":
			return {
				...state,
				start: true,
			};
		case "pause-game":
			return {
				...state,
				start: false,
			};
		case "end-game":
			return {
				...state,
				end: true,
			};
		case "reset-game":
			return {
				...action.payload.initState,
			};
		default:
			return state;
	}
}
