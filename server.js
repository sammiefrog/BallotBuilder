const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const app = express();
const passport = require("passport");
require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// using passport for authentication
app.use(passport.initialize());
require("./config/passport")(passport);

// requiring routes
require("./routes/voteSmart")(app);
require("./routes/userRoutes")(app);

// Send every other request to the React app
// Define any API routes before this runs

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB, handle depreciation warnings
mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/ballotbuilder", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(console.log("Database is connected"))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
