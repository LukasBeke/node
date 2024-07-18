const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Service = require('./serviceModel');

const Mechanic = sequelize.define('Mechanic', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    specialization: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    serviceId: {
        type: DataTypes.INTEGER,
        references: {
            model: Service,
            key: 'id'
        }
    }
});

Service.hasMany(Mechanic, { foreignKey: 'serviceId' });
Mechanic.belongsTo(Service, { foreignKey: 'serviceId' });

module.exports = Mechanic;
