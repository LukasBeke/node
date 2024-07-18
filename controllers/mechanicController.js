const Mechanic = require('../models/mechanicModel');

exports.createMechanic = async (req, res) => {
    try {
        const { firstName, lastName, specialization, photo, city, serviceId } = req.body;
        const mechanic = await Mechanic.create({ firstName, lastName, specialization, photo, city, serviceId });
        res.status(201).json(mechanic);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getMechanics = async (req, res) => {
    try {
        const mechanics = await Mechanic.findAll();
        res.json(mechanics);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateMechanic = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, specialization, photo, city, serviceId } = req.body;
        const mechanic = await Mechanic.findByPk(id);
        if (!mechanic) {
            return res.status(404).json({ error: 'Mechanic not found' });
        }
        mechanic.firstName = firstName;
        mechanic.lastName = lastName;
        mechanic.specialization = specialization;
        mechanic.photo = photo;
        mechanic.city = city;
        mechanic.serviceId = serviceId;
        await mechanic.save();
        res.json(mechanic);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteMechanic = async (req, res) => {
    try {
        const { id } = req.params;
        const mechanic = await Mechanic.findByPk(id);
        if (!mechanic) {
            return res.status(404).json({ error: 'Mechanic not found' });
        }
        await mechanic.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
