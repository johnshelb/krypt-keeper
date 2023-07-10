const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
    checkPassword(pwInput) {
        return bcrypt.compareSync(pwInput, this.password)
    }
}
User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        },
    },
    favorited_events: {
      type: DataTypes.TEXT,
      defaultValue: '[]',
      // get() {
      //   const value = this.getDataValue('favorited_events');
      //   return value ? JSON.parse(value) : [];
      // },
      // set(value) {
      //   this.setDataValue('favorited_events', JSON.stringify(value));
      // }
    },
},
    {
        hooks: {
            beforeCreate: async newUserData => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10)
                return newUserData
            },
            beforeUpdate: async freshUserData => {
                freshUserData.password = await bcrypt.hash(freshUserData.password, 10)
                return freshUserData
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user"
    }
)
module.exports = User
