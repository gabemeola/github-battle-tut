import React, { PropTypes } from "react";

function puke (obj) {
	return <pre>{JSON.stringify(obj, null, " ")}</pre>
}

function Results (props) {
	return (
		<div>Results: {puke(props)}</div>
	)
}

Results.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired
};

export default Results;