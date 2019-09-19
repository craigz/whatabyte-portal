// index.js

const path = require("path");
const express = require("express");
const expressSession = require("express-session");

const app = express();
const port = process.env.PORT || "8000";

const session = {
  secret: "LoxodontaElephasMammutSnerhusPalaeoloxodonPrimeleKluphas",
  cookie: {},
  resave: false,
  saveUninitialized: false
};

if (app.get("env") === "production") {
  session.cookie.secure = true; // Serve secure cookies, requires HTTPS
}

app.use(expressSession(session));

app.set("views", path.join(__dirname, "views"));
app.set("view engine","pug");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req,res) => {
//	res.status(200).send("WHATBYTE: food for devs (and other hungry humans).");
	res.render("index", { title: "Home"});
});

app.get("/user", (req, res) => {
  res.render("user", { title: "Profile", userProfile: { nickname: "craigz" } });
});

app.listen(port, () => {
	console.log(`Listening to requests on http://localhost:${port}`);
});