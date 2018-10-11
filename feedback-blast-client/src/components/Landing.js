import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "../css/Landing.css";

const Landing = props => {
	if (props.auth) {
		return <Redirect to="/surveys" />;
	}
	return (
		<div style={{ textAlign: "center" }}>
			<h1>Feedback Blast</h1>
			<h2>Blast Surveys, Boost Results</h2>
			<img src={require("../img/feedback-comments.jpg")} />
			<img src={require("../img/survey-data.jpg")} />
		</div>
	);
};

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Landing);
