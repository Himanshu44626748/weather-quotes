const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const cssPath = path.join(__dirname, "../public");
const partialPath = path.join(__dirname, "../partials");

app.use(express.static(cssPath));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");

hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/quotes", (req, res) => {
    res.render("quotes");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.listen(8000, () => {
    console.log("listening to the port 8000");
});