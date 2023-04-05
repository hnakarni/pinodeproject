const express = require('express');

const routes = express.Router();

const Admin = require('../models/Admin');

const AdminController = require('../controllers/adminController');

routes.get('/', AdminController.dashboard);

routes.get('/add_admin', AdminController.addAdmin);

routes.post('/insertAdminRecords',Admin.uploadedAvatar,AdminController.insertAdminRecords);

routes.get('/view_admin', AdminController.viewAdmin);

module.exports = routes;