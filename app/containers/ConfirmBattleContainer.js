import React from "react";
import ConfirmBattle from "../components/ConfirmBattle";

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
			isLoading: true,
			playerInfo: []
		}
	},
	render(){
		return(
			<ConfirmBattle/>
		)
	}
});

export default ConfirmBattleContainer;