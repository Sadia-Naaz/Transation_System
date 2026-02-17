const router = require('express').Router();
const controller = require('../controllers/wallet.controller');
const client = require('../middlewares/client.middleware');

router.get('/balance', client, controller.balance);

module.exports = router;
