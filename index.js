const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
// model must be loaded before passport attempts to use it
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

// Middleware
app.use(bodyParser.json());

app.use(
	cookieSession({
		// 30 days calculated from milliseconds
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());
// end Middleware

// equivalent to:
// const authRoutes = require("./routes/authRoutes");
// authRoutes(app);
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
