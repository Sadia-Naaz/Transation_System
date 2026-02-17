module.exports = (req, res, next) => {
  const clientId = req.headers['client-id'];
  if (!clientId) return res.status(401).json({ error: 'client-id required' });
  req.clientId = clientId;
  next();
};
