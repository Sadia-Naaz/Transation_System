const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  clientId: { type: String, unique: true },
  name: String,
  role: { type: String, enum: ['CLIENT', 'ADMIN'], default: 'CLIENT' }
}, { timestamps: true });

module.exports = mongoose.model('Client', clientSchema);
