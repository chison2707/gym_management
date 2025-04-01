const Member = require("../../models/member.model");

module.exports.postMember = async (req, res) => {
    try {
        const { name, email, phone, membership_type } = req.body;
        const newMember = new Member({ name, email, phone, membership_type });
        await newMember.save();
        res.status(201).json(newMember);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports.index = async (req, res) => {
    try {
        const members = await Member.find();
        res.status(200).json(members);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports.detail = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        if (!member) return res.status(404).json({ message: "Member not found" });
        res.status(200).json(member);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports.edit = async (req, res) => {
    try {
        const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMember) return res.status(404).json({ message: "Member not found" });
        res.status(200).json(updatedMember);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports.delete = async (req, res) => {
    try {
        const deletedMember = await Member.findByIdAndDelete(req.params.id);
        if (!deletedMember) return res.status(404).json({ message: "Member not found" });
        res.status(200).json({ message: "Member deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};