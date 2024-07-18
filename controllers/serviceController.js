const Service = require('../models/serviceModel');

exports.createService = async (req, res) => {
    try {
        const { name, address, manager } = req.body;
        const service = await Service.create({ name, address, manager });
        res.status(201).json(service);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getServices = async (req, res) => {
    try {
        const services = await Service.findAll();
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, address, manager } = req.body;
        const service = await Service.findByPk(id);
        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }
        service.name = name;
        service.address = address;
        service.manager = manager;
        await service.save();
        res.json(service);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await Service.findByPk(id);
        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }
        await service.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
