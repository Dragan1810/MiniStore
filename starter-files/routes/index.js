const express = require('express');
const router = express.Router();
const storeControler = require('../controllers/storeControler');
const {catchErrors} = require('../handlers/errorHandlers');

// Do work here
router.get('/', catchErrors(storeControler.getStores));
router.get('/stores', catchErrors(storeControler.getStores));
router.get('/add', storeControler.addStore);
router.post('/add',
    storeControler.upload,
    catchErrors(storeControler.resize),
    catchErrors(storeControler.createStore)
);
router.post('/add/:id',
    storeControler.upload,
    catchErrors(storeControler.resize),
    catchErrors(storeControler.updateStore)
);

router.get('/store/:slug',catchErrors(storeControler.getStoreBySlug))


router.get('/stores/:id/edit',catchErrors(storeControler.editStore));

router.get('/tags',catchErrors(storeControler.getStoreByTag));
router.get('/tags/:tag',catchErrors(storeControler.getStoreByTag));

module.exports = router;
