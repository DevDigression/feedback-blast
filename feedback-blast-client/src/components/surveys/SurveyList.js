import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys, deleteSurvey } from "../../actions";

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		// Reverse -> Sort surveys by most recent first
		return this.props.surveys.reverse().map(survey => {
			return (
				<div className="card darken-1" key={survey._id}>
					<div className="card-content">
						<span className="card-title">{survey.title}</span>
						<p>{survey.body}</p>
						<p className="right">
							Sent On:{" "}
							{new Date(survey.dateSent).toLocaleDateString()}
						</p>
					</div>
					<div className="card-action">
						<a>Yes: {survey.yes}</a>
						<a>No: {survey.no}</a>
						<button
							type="submit"
							className="pink darken-1 btn-flat white-text"
							onClick={() => {
								if (
									window.confirm(
										`Are you sure that you want to delete this survey from your list?`
									)
								) {
									this.props
										.deleteSurvey(survey._id)
										.then(() => this.props.fetchSurveys());
								}
							}}
						>
							Delete
						</button>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div className="container">{this.renderSurveys()}</div>;
	}
}

function mapStateToProps({ surveys }) {
	return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(
	SurveyList
);
