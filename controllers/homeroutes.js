// Routing and rendering page

const router = require("express").Router()


router.get("/", async (req,res) => {
    res.send("Test")
})



// path to models folder   


module.exports = router;