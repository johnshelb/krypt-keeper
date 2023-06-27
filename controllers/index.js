const router = require('express').Router();
const homeroutes = require("./homeroutes.js")

router.use("/" , homeroutes);


module.exports = router;

