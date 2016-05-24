import React, { PropTypes } from "react";
import UserDetails from "./UserDetails";
import UserDetailsWrapper from "./UserDetailsWrapper";
import styles from "../styles";
import { Link } from "react-router";

function puke (obj) {
	return <pre>{JSON.stringify(obj, null, " ")}</pre>
}

function StartOver () {
	return (
		<div className="col-sm-12" style={styles.space}>
			<Link to="/playerOne">
				<button type="button" className="btn btn-lg btn-danger">Start Over</button>
			</Link>
			<StartOver/>
		</div>
	)
}

function Results (props) {
	if (props.isLoading === true) {
		return (
			<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
				<h1>LOADING</h1>
			</div>
		)
	}

	if (props.scores[0] === props.scores[1]) {
		return(
			<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
				<h1>It's a tie!</h1>
			</div>
		)
	}

	var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
	var losingIndex = winningIndex === 0 ? 1 : 0;
	return (
		<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
			<h1>Results</h1>
			<div className="col-sm-8 col-sm-offset-2">
				<UserDetailsWrapper header="Winner">
					<UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
				</UserDetailsWrapper>
				<UserDetailsWrapper header="Loser">
					<UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
				</UserDetailsWrapper>
			</div>
			<StartOver/>
		</div>
	)
}

Results.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired
};

export default Results;