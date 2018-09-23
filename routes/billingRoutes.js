const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middleware/requireLogin");

module.exports = app => {
	app.post("/api/stripe", requireLogin, async (req, res) => {
		const charge = await stripe.charges.create({
			amount: 500,
			currency: "usd",
			description: "$5.00 for 5 credits",
			source: req.body.id
		});

		// User model (req.user) obtained from passport through cookie data
		// set up with passport.initialize() + passport.session()
		req.user.credits += 5;
		const user = await req.user.save();

		res.send(user);
	});
};
