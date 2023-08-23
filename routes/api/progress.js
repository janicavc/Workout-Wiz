const express = require('express');
const router = express.Router();
const progressCtrl = require('../../controllers/api/progress');

// new progress item
router.post('/progress', progressCtrl.create);


module.exports = router;