import React, { PropTypes } from "react";

function puke (obj) {  //Pukes the Data to the screen to look at
	return <pre>{JSON.stringify(obj, null, " ")}</pre>;  //Pre tag keeps the Exact format you type in, tabs and all
}

function ConfirmBattle(props) {
	return props.isLoading === true
		? <p>Loading</p>
		: <div>Confirm Battle!: {puke(props)}</div>
}

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	onInitiateBattle: PropTypes.func.isRequired,
	playersInfo: PropTypes.array.isRequired
};

export default ConfirmBattle;