import React, { Component } from "react";
import _ from "lodash";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import EmailBody from "./EmailBody";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";
import "../../css/SurveyForm.css";

class SurveyForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name }) => {
			if (name === "body") {
				return (
					<Field
						key={name}
						component={EmailBody}
						type="textarea"
						label={label}
						name={name}
					/>
				);
			}
			return (
				<Field
					key={name}
					component={SurveyField}
					type="text"
					label={label}
					name={name}
				/>
			);
		});
	}

	render() {
		return (
			<div className="container form-container">
				<form
					onSubmit={this.props.handleSubmit(
						this.props.onSurveySubmit
					)}
				>
					{this.renderFields()}
					<Link
						to="/surveys"
						className="pink darken-1 btn-flat white-text"
					>
						Cancel<i className="material-icons right">close</i>
					</Link>
					<button
						type="submit"
						className="indigo btn-flat right white-text"
					>
						Next<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.recipients = validateEmails(values.recipients || "");

	_.each(formFields, ({ name }) => {
		if (!values[name]) {
			errors[name] = "Required";
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: "surveyForm",
	// Maintain values in form after clicking next
	destroyOnUnmount: false
})(SurveyForm);
