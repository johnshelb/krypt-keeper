const router = require("express").Router();
const { Event } = require("../../models");


router.get('/attractions' , async(req, res ) => {
    try {
        const eventsDB = await Event.findAll()
        const events = eventsDB.map((event1) =>
        event1.get({ plain: true }));
        console.log("I am logged in: " + req.session.logged_in)
        console.log("here is the current user id");
        console.log(req.session.user_id);
        res.render("attractions", {
            events,
            logged_in: req.session.logged_in,
            thisUser:req.session.user_id
        })
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});


module.exports = router
