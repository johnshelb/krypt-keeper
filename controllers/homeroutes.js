// Routing and rendering page
const router = require("express").Router()
const {Event} = require('../models')





router.get("/", (req,res) => {
    res.render("home",{
      logged_in: req.session.logged_in
    });
})

// Specific attraction example

router.get("/singleAttraction/:id", async (req, res) => {
  console.log(req.session.user_id);
    try {
        const attraction = await Event.findByPk(req.params.id)
        res.render("singleAttraction",{
          ...attraction.dataValues,
          logged_in:req.session.logged_in,
          user_id:req.session.user_id
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//login/signup routes

router.get("/login", (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/")
        return
    }
    res.render("login")
})

router.get("/signUp", (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/")
        return
    }
    res.render("signUp")
})

// path to models folder


module.exports = router;
