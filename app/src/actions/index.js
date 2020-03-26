import axios from 'axios';

export const fetchCat = () => {
	return dispatch => {
		dispatch({ type: 'FETCHING_CAT_START' });
		axios
			.get('https://aws.random.cat/meow')
			.then(res => {
				dispatch({ type: 'FETCHING_CAT_SUCCESS', payload: res.data });
			})
			.catch(err => console.log(err));
	};
};

// const thunk = action => next => {
// 	if (typeof action === 'function') {
// 		action(store.dispatch);
// 	} else if (typeof action === 'object') {
// 		next(action);
// 	}
// };
