const initialState = {
	isLoading: false,
	cat: null,
	error: ''
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCHING_CAT_START':
			return {
				...state,
				isLoading: true
			};
		case 'FETCHING_CAT_SUCCESS':
			return {
				...state,
				isLoading: false,
				cat: action.payload
			};
		default:
			return state;
	}
};
