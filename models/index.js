const Event = require("./eventmodel");
const User = require ("./usermodel");

Event.belongsTo(User, {
    foreignKey: "user_id"
});

module.export = {Event, User}