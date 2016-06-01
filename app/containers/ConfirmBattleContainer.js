import React from "react";
import ConfirmBattle from "../components/ConfirmBattle";
import { getPlayersInfo } from "../utils/githubHelpers";

class ConfirmBattleContainer extends React.Component{
	constructor() {
		super();
		this.state = {
			isLoading: true,
			playersInfo: []
		}
	}
	componentDidMount() {
		const { query } = this.props.location;
		// Fetch info from github then update state
		getPlayersInfo([query.playerOne, query.playerTwo])
			.then((players) => {
				this.setState({
					isLoading: false,
					playersInfo: [players[0], players[1]]
				})
			}); //Bind the inner function "this" to the React.createClass outer function "this"
	}
	handleInitiateBattle() {
		this.context.router.push({
			pathname: "/results",
			state: {
				playersInfo: this.state.playersInfo
			}
		})
	}
	render(){  //This keyword context is different in ConfirmBattle and doesn't autobind in ES2015 classes
		return(
			<ConfirmBattle
				isLoading={this.state.isLoading}
				onInitiateBattle={() => this.handleInitiateBattle()}
				playersInfo={this.state.playersInfo}
			/>
		)
	}
}

ConfirmBattleContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer;