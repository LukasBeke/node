const sequelize = require('./config/database');
const User = require('./models/userModel');
const Service = require('./models/serviceModel');
const Mechanic = require('./models/mechanicModel');

async function initDatabase() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true });
    } catch (error) {

    } finally {
        sequelize.close();
    }
}

initDatabase();
