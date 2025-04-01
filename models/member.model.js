const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    membership_type: String
}, { timestamps: true });

module.exports = mongoose.model('Member', MemberSchema);
