const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/ErrorHandler");

const PORT = process.env.PORT || 5000;
app.use(express.json());

// Routes
const getAudiobooks = require("./router/getAudiobook");
const searchAudiobook = require("./router/searchAudiobook");

app.use("/audiobook", getAudiobooks);
app.use("/search", searchAudiobook);

// ErrorHandler
app.use(ErrorHandler);

app.listen(PORT);