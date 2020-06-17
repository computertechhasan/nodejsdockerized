const express = require("express");
const app = express()
const PORT = 3000;
const CONSTANTS = require("./properties/constants");

app.get("/", function(req, res, next) {
    res.status(200).json({"message":"we out here in a container"});
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.status(err.status || 500);
});

app.listen(CONSTANTS.SERVER_PORT, function() {
    console.log(`Listening at http://localhost:${CONSTANTS.SERVER_PORT}`);
});
