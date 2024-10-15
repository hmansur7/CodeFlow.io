const express = require('express');
const { commitChanges, pushChanges, pullChanges, createBranch } = require('../controllers/gitController');
const router = express.Router();


router.post('/commit', commitChanges);


router.post('/push', pushChanges);


router.post('/pull', pullChanges);


router.post('/branch', createBranch);

module.exports = router;

