// Routing and rendering page
const router = require("express").Router()


router.get("/", async (req,res) => {
    res.send("This is the contact page")
})


module.exports = router;