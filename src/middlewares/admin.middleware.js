module.exports = (req, res, next) => {
  if (req.client.role !== 'ADMIN') {
    return res.status(403).json({
      error: 'Forbidden: Admin access required'
    });
  }
  next();
};
