import React from "react";

var Main = React.createClass({
	render(){
		return(
			<div className="main-container">
				{this.props.children}
			</div>
		)
	}
});

export default Main;