import React, { PropTypes } from "react";
import styles from "../styles"

function puke (obj) {  //Pukes the Data to the screen to look at
	return <pre>{JSON.stringify(obj, null, " ")}</pre>;  //Pre tag keeps the Exact format you type in, tabs and all
}

function ConfirmBattle(props) {
	return props.isLoading === true
		? <p>Loading</p>
		: <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
				<h1>Confirm Players</h1>
				<div className='col-sm-8 col-sm-offset-2'>
					<div className="col-sm-6">
						<p className="lead">Player 1</p>
						{puke(props.playersInfo[0])}
					</div>
					<div className="col-sm-6">
						<p className="lead">Player 1</p>
						{puke(props.playersInfo[1])}
					</div>
				</div>
				<div className='col-sm-8 col-sm-offset-2'>
					<div className='col-sm-12' style={styles.space}>
						INITIATE BATTLE BUTTON
					</div>
					<div className='col-sm-12' style={styles.space}>
						LINK TO /PLAYERONE
					</div>
				</div>
			</div>
}

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	onInitiateBattle: PropTypes.func.isRequired,
	playersInfo: PropTypes.array.isRequired
};

export default ConfirmBattle;