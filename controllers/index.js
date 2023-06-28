const router = require('express').Router();

const homeroutes = require("./homeroutes.js")
// const userRoutes = require("./api/userRoutes.js")


router.use("/" , homeroutes);
// router.use("/userRoutes", userRoutes);


module.exports = router;
