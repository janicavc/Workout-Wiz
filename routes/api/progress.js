const express = require('express');
const router = express.Router();
const progressCtrl = require('../../controllers/api/progresses');

// new progress item
router.post('/progress', progressCtrl.create);
// show all progress entries
router.get('/progress', progressCtrl.getProgress);


module.exports = router;