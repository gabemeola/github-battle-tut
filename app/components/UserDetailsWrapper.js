import React, { PropTypes } from "react";

function UserDetailsWrapper ({header, children}) {
	return (
		<div className="col-sm-6">
			<p className="lead">{header}</p>
			{children}
		</div>
	);
}

UserDetailsWrapper.propTypes = {
	header: React.PropTypes.string.isRequired
};

export default UserDetailsWrapper;