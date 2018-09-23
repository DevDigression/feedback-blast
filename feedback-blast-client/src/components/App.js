import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const NewSurvey = () => <h2>NewSurvey</h2>;

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/surveys" component={Dashboard} />
					<Route exact path="/surveys/new" component={NewSurvey} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
