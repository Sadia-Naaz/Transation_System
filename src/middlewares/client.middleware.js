const Client = require('../models/client.model');

module.exports = async (req, res, next) => {
  const clientId = req.headers['client-id'];

  if (!clientId) {
    return res.status(401).json({ error: 'client-id header required' });
  }

  const client = await Client.findOne({ clientId });

  if (!client) {
    return res.status(401).json({ error: 'Invalid client' });
  }

  req.client = client; // attach user context
  next();
};
