const express = require('express');
const routes = require('controllers');
const app = express();
const exphb = require("express-handlebars");
const hbs = exphb.create();
const path = require("path");

const PORT = process.env.PORT || 8888;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname,"public")));


app.use(routes);


app.listen(PORT, () => console.log("Server is Running!" + ` ${PORT}`))