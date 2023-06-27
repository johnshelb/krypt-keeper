const express = require('express');
const routes = require('./controllers/api/index');
const app = express();
const exphb = require("express-handlebars");
const hbs = exphb.create();

const PORT = process.env.PORT || 8888;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars")
app.use(express.json())
app.use(express.static("public"))

// const termData = require('./db/terms.json');

app.use(express.static('public'));

app.use(routes);



// app.get('/api/terms', (req, res) => res.json(termData));

app.listen(PORT, () => console.log("Server is Running!"))