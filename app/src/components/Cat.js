import React from 'react';
import { connect } from 'react-redux';
import { fetchCat } from '../actions';
import Loader from 'react-loader-spinner';

const Cat = props => {
	return (
		<div>
			<button onClick={props.fetchCat}>Get Kitty</button>
			{!props.cat && !props.isLoading && <h2>Get a new kitty!</h2>}
			{props.isLoading && (
				<Loader
					type='Puff'
					color='#00BFFF'
					height={100}
					width={100}
					timeout={3000} //3 secs
				/>
			)}
			{props.cat && !props.isLoading && <img src={props.cat.file} />}
		</div>
	);
};
const mapStateToProps = state => {
	return {
		isLoading: state.isLoading,
		cat: state.cat,
		error: state.error
	};
};

export default connect(mapStateToProps, { fetchCat })(Cat);
