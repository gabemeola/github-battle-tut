import React from "react";
import Prompt from "../components/Prompt";

class PromptContainer extends React.Component{
	constructor() {
		super();
		this.state = {
			username: ""
		}
	}
	handleUpdateUser(event) {
		this.setState({
			username: event.target.value
		})
	}
	handleSubmitUser(event) {
		event.preventDefault();
		const { username } = this.state;
		this.setState({
			username: ""
		});

		const { playerOne } = this.props.routeParams;
		if (playerOne) {
			this.context.router.push({
				pathname: "/battle",
				query: {
					playerOne: playerOne,
					playerTwo: username
				}
			})
		} else {
			this.context.router.push(`/playerTwo/${username}`)
		}
	}
	render(){
		return (
			<Prompt
				onSubmitUser={() => this.handleSubmitUser()}
				onUpdateUser={() => this.handleUpdateUser()}
			  header={this.props.route.header}
			  username={this.state.username}
			/>
		)
	}
}

PromptContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
};

export default PromptContainer;