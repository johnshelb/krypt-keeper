require ("dotenv").config();

const Sequelize = require("sequelize");
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL)

<<<<<<< HEAD
} else {

   sequelize = new Sequelize(
=======





} else {

 sequelize = new Sequelize(

>>>>>>> 5f7f2829e2656f36252c39b50609c6a86eb00029
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: "localhost",
        dialect: "mysql",
        port: 8888

    }
<<<<<<< HEAD
)};

module.exports=sequelize;
=======

)


};

module.exports=sequelize;

>>>>>>> 5f7f2829e2656f36252c39b50609c6a86eb00029
