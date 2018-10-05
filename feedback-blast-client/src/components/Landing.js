import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Landing = props => {
	if (props.auth) {
		return <Redirect to="/surveys" />;
	}
	return (
		<div style={{ textAlign: "center" }}>
			<h1>Feedback Blast</h1>
			<h2>Blast Surveys, Boost Results</h2>
		</div>
	);
};

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Landing);
