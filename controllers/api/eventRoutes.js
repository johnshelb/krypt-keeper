const router = require("express").Router()

//create event route to create event, post method


router.get("/", async (req,res) => {
    res.send("The events")
})




module.exports = router