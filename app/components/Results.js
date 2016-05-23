import React, { PropTypes } from "react";

function puke (obj) {
	return <pre>{JSON.stringify(obj, 2, " ")}</pre>
}

function Results (props) {
	return (
		<div>Results: {puke(props)}</div>
	)
}

Results.propTypes = {
	isLoading: React.bool.isRequired,
	playersInfo: React.array.isRequired,
	scores: React.array.isRequired
};

export default Results;