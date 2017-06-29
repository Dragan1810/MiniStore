const express = require('express');
const router = express.Router();
const storeControler = require('../controllers/storeControler');
const {catchErrors} = require('../handlers/errorHandlers');

// Do work here
router.get('/', catchErrors(storeControler.getStores));
router.get('/stores', catchErrors(storeControler.getStores));
router.get('/add', storeControler.addStore);
router.post('/add',catchErrors(storeControler.createStore));

module.exports = router;
