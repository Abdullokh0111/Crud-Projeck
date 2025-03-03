const service = require("../service/pc.service.js");

const getAllPc =  (req, res) => {
    try {
        const result =  service.getAllPc();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addNewPc =  (req, res) => {
    try {
        service.addNewPc(req.body);
        res.status(201).json({message: "Computer muvaffaqiyatli qo'shildi"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletePc =  (req, res) => {
    try {
        service.deletePc(req.params.id);
        res.status(200).json({message: "Computer muvaffaqiyatli o'chirildi"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatePc =  (req, res) => {
    try {
        service.updatePc(req.params.id, req.body);
        res.status(200).json({message: "Computer muvaffaqiyatli o'zgartirildi"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllPc,
    addNewPc,   
    deletePc,
    updatePc
};