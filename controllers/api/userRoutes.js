const router = require("express").Router()
const {User,Event} = require("../../models")

//signing up new user
router.post("/", async (req, res)=> {
  console.log('body');
  console.log(req.body)
  console.log('body');

    try {
        const userData = await User.create(req.body);
        req.session.save(()=>{
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json(userData);
        })
    } catch (error) {
        res.json(error)
    }
})

router.get('/faves', async (req,res)=>{
  console.log("in get faves route");
  try{
    const user = await User.findByPk(req.session.user_id)
    // console.log(Array.isArray(JSON.parse(JSON.parse(user.dataValues.favorited_events))));
    const faveIds =JSON.parse(user.dataValues.favorited_events)
    const favePromises = faveIds.map(async function(id){
        return await Event.findByPk(id)
    })
    const faves = await Promise.all(favePromises)
    // console.log(faves)
    res.render("favorites",{faves,logged_in:req.session.logged_in})
  }catch(error){
    console.log(error);
    res.render("login")
  }
})

// router.post('/faves', async (req,res)=>{
//   User.findByPk(parseInt(req.session.user_id))
//     .then((user) => {
//       if (user) {
//         const faves = JSON.parse(user.favorited_events)
//         // Push the event ID to the favorited_events array
//         if(!faves.includes(parseInt(req.body.eventId))){
//
//           faves.push(parseInt(req.body.eventId));
//         }
//         user.favorited_events = JSON.stringify(faves)
//         // Save the user to update the favorited_events array in the database
//         return user.save({ fields: ['favorited_events'] });//prevents password from being rehashed by beforeUpdate hook
//       } else {
//         // Handle the case where the user is not found
//         throw new Error('User not found');
//       }
//     })
//     .then((updatedUser) => {
//       // User with updated favorited_events array
//       res.status(200).json(updatedUser)
//     })
//     .catch((error) => {
//       console.log(error);
//       // Handle any errors that occur
//       res.render("login")
//     });
// router.post('/faves', async (req,res)=>{
//   console.log('posting to faves');
//   console.log(req.body);
//   try{
//   const user = await User.findByPk(parseInt(req.session.user_id))
//     if (user) {
//         const faves = JSON.parse(user.favorited_events)
//         // Push the event ID to the favorited_events array
//         if(!faves.includes(parseInt(req.body.eventId))){
//
//           faves.push(parseInt(req.body.eventId));
//         }
//         user.favorited_events = JSON.stringify(faves)
//         // Save the user to update the favorited_events array in the database
//         console.log(user)
//         return user.save({ fields: ['favorited_events'] });//prevents password from being rehashed by beforeUpdate hook
//       } else {
//         // Handle the case where the user is not found
//         throw new Error('User not found');
//       }
//       // res.end()
//   }catch(error) {
//       console.log(error);
//       // Handle any errors that occur
//       res.render("login")
//     };
// })

router.post('/faves', (req,res)=>{
User.findByPk(req.body.userId)
  .then((user) => {
    if (user) {
      console.log(user);
      // Deserialize the favorited_events array
      const favoritedEvents = JSON.parse(user.favorited_events);
      // Push the event ID to the favorited_events array if not already there
     if(!favoritedEvents.includes(req.body.eventId)) {
      favoritedEvents.push(req.body.eventId);
    }
      // Serialize the updated array
      user.favorited_events = JSON.stringify(favoritedEvents);
      // Exclude the password field from the update
      return user.save({ fields: ['favorited_events'] });
    } else {
      // Handle the case where the user is not found
      throw new Error('User not found');
    }
  })
  .then((updatedUser) => {
    // console.log(updatedUser);
    // User with updated favorited_events array
    res.sendStatus(200)
  })
  .catch((error) => {
    console.log(error);
    // Handle any errors that occur
  });
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
        });
        if (!userData) {
            res.status(400).json({ message: "Username or password incorrect." });
            return
        }
        const goodPw = await userData.checkPassword(req.body.password)
        console.log('userData is in:  ' + goodPw)
        if (!goodPw) {
            res.status(400).json({ message: "Username or password incorrect." });
            return
        }
        // req.session.save(() => {
            req.session.user_id = userData.dataValues.id
            req.session.logged_in = true
            res.json({ user: userData, message: "Successfully logged in!" })
        // });
    } catch (error) {
        res.status(400).json(error)
    }
})


module.exports = router;
