import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import _ from "lodash";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name}>
				<label style={{ padding: "20px 10px" }}>{label}</label>
				<div style={{ padding: "20px 10px" }}>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div className="container" style={{ margin: "50px auto" }}>
			<h5 style={{ margin: "20px auto" }}>
				Please review and confirm your entries
			</h5>
			{reviewFields}
			<button
				className="pink darken-1 btn-flat white-text"
				onClick={onCancel}
				style={{ margin: "50px auto" }}
			>
				Back<i className="material-icons right">backspace</i>
			</button>
			<button
				onClick={() => submitSurvey(formValues, history)}
				className="indigo btn-flat right white-text"
				style={{ margin: "50px auto" }}
			>
				Send Survey
				<i className="material-icons right">email</i>
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		formValues: state.form.surveyForm.values
	};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
