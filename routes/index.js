const express = require('express');
const controller = require('../controllers/index');
const router = express.Router();
const router = require('./routes/index');
app.use('/', router);
router.get('/', controller.home);

router.get('/search', controller.search)

module.exports = router;