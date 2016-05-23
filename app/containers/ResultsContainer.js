import React from "react";
import Results from "../components/Results";
import githubHelpers from "../utils/githubHelpers";

var ResultsContainer = React.createClass({
	getInitialState: function() {
		return {
			isLoading: true,
			scores: []
		}
	},
	componentDidMount: function () {
		console.log(this.props);
		githubHelpers.battle(this.props.location.state.playersInfo)
			.then( scores => { //Using Arrow Functions to be able to use "this" without using .bind
				this.setState({
					scores: scores,
					isLoading: false
				})
			})
	},
	render(){
		return(
			<Results
				isLoading={this.state.isLoading}
				playersInfo={this.props.location.state.playersInfo}
			  scores={this.state.scores}
			/>
		)
	}
});

export default ResultsContainer;