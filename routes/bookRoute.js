const express = require('express');

const route = express.Router();

const bookController = require('../controllers/bookController');

route.route('/').get(bookController.getAllBooks).post(bookController.addNewBook).delete(bookController.deleteBook);

module.exports= route;