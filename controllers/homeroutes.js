// Routing and rendering page

const router = require("express").Router()


router.get("/", async (req,res) => {
    res.send("Test")
})

router.get("/singleAttraction/:id", async (req, res) => {
    try {
        res.render("singleAttraction", {
            title: "SpookyZone", 
            description: "It's Spooky!",
            price: "$3,00000",
            address: "nowhere",
            date: "June 30"
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// path to models folder   


module.exports = router;