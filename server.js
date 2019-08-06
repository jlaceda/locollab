const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const passport = require ('passport');
// const session = require('express-session');
const cookieParser = require('cookie-parser');
//app.use(cookieParser);
app.use(cookieParser('locollab'));

// const sess = {
//   secret: 'locollab',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {}
// }

// if (app.get('env') === 'production') {
//   app.set('trust proxy', 1) // trust first proxy
//   sess.cookie.secure = true // serve secure cookies
// }

// app.use(session(sess));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  // Set Content-Type explicitly for js files
  app.use((req, res, next) => {
    if (req.path.endsWith(".js")) {
      res.setHeader("Content-Type", "application/javascript");
    }
    next();
  });
}
// Send every other request to the React app
// Define any API routes before this runs
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Define routes here
app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/locollab", {useNewUrlParser: true});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
