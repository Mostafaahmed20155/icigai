const path = require('path');
const express = require('express');

const userController = require('../controller/userController')
const router = express.Router();

router.get('/', userController.getIndex);

router.get('/homepage', userController.getIndex);

router.post('/contact-us', userController.postContactUs)

module.exports = router;