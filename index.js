require('dotenv').config();
require('module-alias/register');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const file = require("@/routes/file");
const cart = require('@/routes/cart');

app.use(bodyParser.json());
app.use('/cart', cart);
app.use('/image', file);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})