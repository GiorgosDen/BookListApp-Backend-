const express = require('express');
const app = express();
const cors = require('cors');

const bookRoute = require('./routes/bookRoute');

const originOptions = {
    origin:"http://localhost:3000",
    origin:"http://localhost:3500",
    origin:"http://192.168.1.113:3000"
}

app.use(cors({
    origin:originOptions,
    credentials:true,
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/myBooks',bookRoute);


module.exports = app;
