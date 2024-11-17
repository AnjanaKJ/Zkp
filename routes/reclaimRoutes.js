const express = require('express');
const { receiveEHR } = require('../controllers/reclaimController');
const router = express.Router();

router.post('/receive-ehr/:id', receiveEHR);

module.exports = router;
