const express = require('express');

const routes = express.Router();

const AdminController = require('../controllers/adminController');

routes.get('/', AdminController.dashboard);

module.exports = routes;