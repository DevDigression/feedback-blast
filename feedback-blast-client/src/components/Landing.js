import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "../css/Landing.css";

const Landing = props => {
	if (props.auth) {
		return <Redirect to="/surveys" />;
	}
	return (
		<div className="landing-page" style={{ textAlign: "center" }}>
			<header>
				<h1>Feedback Blast</h1>
				<h2>Blast Surveys, Boost Results</h2>
			</header>
			<div className="landing-section">
				<div className="landing-image left">
					<img src={require("../img/feedback-comments.jpg")} />
				</div>
				<div className="landing-text">
					<p>
						You want to know what your clients think, but don't have
						the time to ask and answer questions individually? The
						best way to collect data is through automated survey
						dispatch.
					</p>
					<p>
						Feedback Blast has you covered, with the ability to send
						surveys to the clients you want to hear from, to get the
						results that matter most!
					</p>
				</div>
			</div>
			<div className="landing-section">
				<div
					className="landing-image right"
					style={{ marginTop: "150px" }}
				>
					<img src={require("../img/survey-data.jpg")} />
				</div>
				<div className="landing-text">
					<ul>
						<li>
							<i className="material-icons large">announcement</i>
							Send surveys to a list of up to 100 recipients at a
							time
						</li>
						<li>
							<i className="material-icons large">assessment</i>
							Seamlessly collect feedback data
						</li>
						<li>
							<i className="material-icons large">build</i>
							Stay focused and work on priority areas
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Landing);
