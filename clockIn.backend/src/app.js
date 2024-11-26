const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");
const status = require("http-status");
const httpStatus = status.status;
const ApiError = require("./utils/ApiError");
const routes = require("./routes/v1/routes.js");
const { errorConverter, errorHandler } = require("./middlewares/error.js");
const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// enable cors
app.use(cors());
app.options("*", cors());

//v1 routes
app.use("/v1", routes);

//send 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

//handle error
app.use(errorHandler);

module.exports = app;
