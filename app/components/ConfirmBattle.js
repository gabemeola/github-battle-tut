import React from "react";

function ConfirmBattle(props) {
	return props.isLoading === true
		? <p>Loading</p>
		: <p>Confirm Battle</p>
}

export default ConfirmBattle;