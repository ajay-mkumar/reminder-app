const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'users',
    timestamps: true
})

sequelize.sync({alter: true})
.then(() => {
    console.log('Database synced!')
}).catch((err) => {
    console.log(`error syncing database ${err}`)
})

module.exports = User;