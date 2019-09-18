// index.js

const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || "8000";

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