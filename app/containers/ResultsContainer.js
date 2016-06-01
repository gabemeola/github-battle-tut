import React from "react";
import Results from "../components/Results";
import { battle } from "../utils/githubHelpers";

class ResultsContainer extends React.Component{
	constructor() {
		super();
		this.state = {
			isLoading: true,
			scores: []
		}
	}
	componentDidMount() {
		console.log(this.props);
		battle(this.props.location.state.playersInfo)
			.then( (scores) => { //Using Arrow Functions to be able to use "this" without using .bind
				this.setState({
					scores: scores,
					isLoading: false
				})
			})
	}
	render(){
		return(
			<Results
				isLoading={this.state.isLoading}
				playersInfo={this.props.location.state.playersInfo}
			  scores={this.state.scores}
			/>
		)
	}
}

export default ResultsContainer;