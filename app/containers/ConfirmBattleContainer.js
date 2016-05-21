import React from "react";
import ConfirmBattle from "../components/ConfirmBattle";
import githubHelpers from "../utils/githubHelpers";

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
	componentDidMount: function () {
		var query = this.props.location.query;
		// Fetch info from github then update state
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
	},
	render(){
		return(
			<ConfirmBattle
				isLoading={this.state.isLoading}
				playersInfo={this.state.playersInfo}
			/>
		)
	}
});

export default ConfirmBattleContainer;