import React from "react";

function puke (obj) {  //Pukes the Data to the screen to look at
	return <pre>{JSON.stringify(obj, null, " ")}</pre>;  //Pre tag keeps the Exact format you type in, tabs and all
}

function ConfirmBattle(props) {
	return props.isLoading === true
		? <p>Loading</p>
		: <div>Confirm Battle!: {puke(props)}</div>
}

export default ConfirmBattle;