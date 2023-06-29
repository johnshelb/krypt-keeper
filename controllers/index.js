const router = require('express').Router();

const homeroutes = require("./homeroutes.js")
const userRoutes = require ("./api/userRoutes.js")
const contactpage = require("./api/contactpage.js")

router.use("/homeroutes" , homeroutes);

router.use("/userRoutes", userRoutes);

router.use("/contactpage", contactpage);

module.exports = router;
 