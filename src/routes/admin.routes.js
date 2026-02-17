const router = require('express').Router();
const adminController = require('../controllers/admin.controller');
const client = require('../middlewares/client.middleware');
const isAdmin = require('../middlewares/admin.middleware');

router.post('/wallet/credit', client, isAdmin, adminController.credit);
router.post('/wallet/debit', client, isAdmin, adminController.debit);

module.exports = router;

