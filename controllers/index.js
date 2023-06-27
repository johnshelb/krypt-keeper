const router = require('express').Router();


router.get('/', (req, res) => {
    console.log("homepage route");

    // sends a home.html file to the browser
    res.sendFile(path.join(__dirname, 'views', 'layout', 'main.handlebars'));
  });


  // module.exports = 