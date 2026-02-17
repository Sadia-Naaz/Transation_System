const router = require('express').Router();
const controller = require('../controllers/admin.controller');

router.post('/wallet/credit', controller.credit);
router.post('/wallet/debit', controller.debit);

module.exports = router;
