import React from "react";
import "../../css/SurveyForm.css";

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div>
			<label>{label}</label>
			<input {...input} />
			<div className="error-msg red-text">
				{touched && error}
			</div>
		</div>
	);
};
