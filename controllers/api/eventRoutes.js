const router = require("express").Router()
const { Event } = require("../../models");


//create event route to create event, post method
router.get('/' , async(req, res ) => {
    try {
        const eventsDB = await Event.findAll({
            include: [
                {
                    model: Event,
                    attributes: [ "name", "address", "cost"]
                }
            ]
        })
        const events = eventsDB.map((event1) => 
        event1.get({ plain: true }));
        res.render("attractions", {
            events, 
            loggedIn: req.session.loggedIn
        })
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});

// POST request
app.post('/api/reviews', (req, res) => {
  // Let the client know that their POST request was received
  res.json(`${req.method} request received`);

});


module.exports ={  router }