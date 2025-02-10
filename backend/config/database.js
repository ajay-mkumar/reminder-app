const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Users', 'ajay', 'ajay0911', {
    host: 'localhost',
    dialect: 'mysql'
})

const testConnection = async() => {
    try {
        await sequelize.authenticate();
        console.log('Database is connected');
    } catch(err) {
        console.log(`error connecting to db: ${err}`);
    }
}

testConnection();

module.exports = sequelize;