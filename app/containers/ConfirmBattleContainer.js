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
			playersInfo: []
		}
	},
	componentDidMount: function () {
		var query = this.props.location.query;
		// Fetch info from github then update state
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(function (players) {
				this.setState({
					isLoading: false,
					playersInfo: [players[0], players[1]]
				})
			}.bind(this)); //Bind the inner function "this" to the React.createClass outer function "this"
	},
	handleInitiateBattle: function () {

	},
	render(){
		return(
			<ConfirmBattle
				isLoading={this.state.isLoading}
				onInitiateBattle={this.handleInitiateBattle}
				playersInfo={this.state.playersInfo}
			/>
		)
	}
});

export default ConfirmBattleContainer;