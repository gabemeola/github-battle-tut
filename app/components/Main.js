import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

var Main = React.createClass({
	render(){
		return(
			<div className="main-container">
				<ReactCSSTransitionGroup
					transitionName="appear"
				  transitionEnterTimeout={500}
				  transitionLeaveTimeout={500}
				>
					{React.cloneElement(this.props.children, {key: this.props.location.pathname})}
					{/* Allows to path props to otherwise none components */}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
});

export default Main;