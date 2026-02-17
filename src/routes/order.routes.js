const router = require('express').Router();
const controller = require('../controllers/order.controller');
const client = require('../middlewares/client.middleware');

router.post('/', client, controller.create);
router.get('/:id', client, controller.getById);

module.exports = router;
