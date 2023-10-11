const corsLibrary = require("cors");

export const config = {
	origin: 'localhost:3000',
	preflightContinue: false,
	optionsSuccessStatus: 200,
	methods: "GET,HEAD,OPTIONS,PUT,POST,DELETE",
	credentials: true,
	exposedHeaders: ["Content-Type", "set-cookie"],
};
export const cors = corsLibrary(config);
module.exports = { cors, config };
