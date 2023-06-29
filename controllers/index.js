const router = require('express').Router();

const homeroutes = require("./homeroutes.js")
const api = require ("./api")


router.use("/" , homeroutes);
router.use("/api", api)



module.exports = router;
 