import React from "react";

var styles = {
	container: {
		position: "fixed",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		fontSize: "55px"
	},
	content: {
		textAlign: "center",
		position: "absolute",
		width: "100%",
		marginTop: "30px"
	}
};

var Loading = React.createClass({
	getInitialState: function () {
		this.originalText = "Loading";
		return {
			text: this.originalText + "..."
		}
	},
	componentDidMount: function () {
		var stopper = "Loading...";
		this.interval = setInterval(function () {
			if (this.state.text === stopper) {
				this.setState({
					text: this.originalText
				})
			} else {
				this.setState({
					text: this.state.text + "."
				})
			}
 		}.bind(this), 300)
	},
	componentWillUnmount : function () {  // Stops the Loop after we aren't using the component
		clearInterval(this.interval)
	},
	render(){
		return(
			<div style={styles.container}>
				<p style={styles.content}>{this.state.text}</p>
			</div>
		)
	}
});

export default Loading;