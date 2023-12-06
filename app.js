const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('mongodb connect success'))
.catch((error) => {
    console.log(error);
    console.log('mongodb connect error');
})
;

module.exports = app;
