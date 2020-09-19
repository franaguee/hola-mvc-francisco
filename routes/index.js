const express = require('express');
const controller = require('../controllers/index');
const router = express.Router();

router.get('/', controller.home);

router.get('/search', controller.search)

module.exports = router;
© 2020 GitHub, Inc.
