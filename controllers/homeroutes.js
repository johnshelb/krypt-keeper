// Routing and rendering page
const router = require("express").Router()


router.get("/", async (req,res) => {
    res.send("The goose is watching")
})





// path to models folder   


module.exports = router;