const express = require('express');
const app = express();

app.use(express.json());

app.use('/admin', require('./routes/admin.routes'));
app.use('/orders', require('./routes/order.routes'));
app.use('/wallet', require('./routes/wallet.routes'));

app.use(require('./middlewares/error.middleware'));

module.exports = app;
