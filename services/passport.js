const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
	// user pulled from db; user.id is mongo id
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			// Must match with authorized redirect uri on Google Dev app setup:
			callbackURL: "/auth/google/callback"
		},
		(accessToken, refreshToken, profile, done) => {
			// Query returns a promise (async)
			User.findOne({ googleId: profile.id }).then(existingUser => {
				if (existingUser) {
					done(null, existingUser);
				} else {
					new User({
						googleId: profile.id
					})
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);
