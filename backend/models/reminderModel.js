const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./userModel');

const reminder = sequelize.define('reminder', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
        index: false,
        onUpdate: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    reminder: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reminder_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'reminder',
    timestamps: 'true'
});

User.hasMany(reminder, {foreignKey: 'userId'});
reminder.belongsTo(User, {foreignKey: {name: 'userId', index: false }});

module.exports = reminder;