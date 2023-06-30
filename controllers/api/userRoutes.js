const router = require("express").Router()
const { User } = require("../../models")

router.get("/", async (req, res) => {
    res.send("The goose needs a login")
})

//logout

router.post("/logout", (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    } else {
        res.status(404).end()
    }
})

//login

router.post("/login", async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username
            }
        })
        if (!userData) {
            res.status(400).json({ message: "Username or password incorrect." })
            return
        }
        const goodPw = await userData.checkPassword(req.body.password)
        if (!goodPw) {
            res.status(400).json({ message: "Username or password incorrect." })
            return
        }
        req.session.save(() => {
            req.session.user_id = userData.user_id
            req.session.logged_in = true
            res.json({ user: userData, message: "Successfully logged in!" })
        })
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;