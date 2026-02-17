require('dotenv').config();
const mongoose = require('mongoose');

const Client = require('../models/client.model');
const Wallet = require('../models/wallet.model');

const connectDB = require('../../db');

const seed = async () => {
  await connectDB();

  // Clear old data (safe for testing)
  await Client.deleteMany({});
  await Wallet.deleteMany({});

  // Dummy Admin
  await Client.create({
    clientId: 'admin-001',
    name: 'System Admin',
    role: 'ADMIN'
  });

  // Dummy Client
  await Client.create({
    clientId: 'client-001',
    name: 'Test Client',
    role: 'CLIENT'
  });

  // Wallet for client
  await Wallet.create({
    clientId: 'client-001',
    balance: 1000
  });

  console.log('✅ Dummy users seeded successfully');
  process.exit(0);
};

seed();
