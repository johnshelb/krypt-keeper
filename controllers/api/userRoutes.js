const router = require("express").Router()


router.get("/userRoutes", async (req,res) => {
    res.send("Test")
})