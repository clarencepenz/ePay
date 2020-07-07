const express = require('express');
const router = express.Router();
const stripeCtrl = require('../controllers/stripe');

router.post('/pay',  stripeCtrl.createPayment);
router.get('/',  stripeCtrl.getPayment);


module.exports = router;  