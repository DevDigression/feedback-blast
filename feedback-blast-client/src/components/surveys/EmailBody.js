import React from "react";
import "../../css/SurveyForm.css";

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div className="email-body">
			<label>{label}</label>
			<textarea {...input} />
			<div className="error-msg red-text">{touched && error}</div>
		</div>
	);
};
