const router = require('express').Router();

const homeroutes = require("./homeroutes.js")
const userRoutes = require ("./api/userRoutes.js")
const contactpage = require("./api/contactpage.js")
const eventRoutes = require("./api/eventRoutes.js")

router.use("/" , homeroutes);

router.use("/userRoutes", userRoutes);

router.use("/contactpage", contactpage);

router.use("/eventRoutes", eventRoutes);

module.exports = router;
 