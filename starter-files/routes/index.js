const express = require('express');
const router = express.Router();
const storeControler = require('../controllers/storeControler');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const {catchErrors} = require('../handlers/errorHandlers');

// Do work here
router.get('/', catchErrors(storeControler.getStores));
router.get('/stores', catchErrors(storeControler.getStores));
router.get('/add',authController.isLoggedIn,storeControler.addStore);

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
router.get('/stores/:id/edit',catchErrors(storeControler.editStore));
router.get('/store/:slug',catchErrors(storeControler.getStoreBySlug))


router.get('/tags',catchErrors(storeControler.getStoreByTag));
router.get('/tags/:tag',catchErrors(storeControler.getStoreByTag));

router.get('/login',userController.loginForm)
router.post('/login',authController.login);
router.get('/register', userController.registerForm);


router.post('/register', 
    userController.validateRegister,
    userController.register,
    authController.login
    
);

router.get('/logout', authController.logout);
router.get('/account',authController.isLoggedIn, userController.account);
router.post('/account', catchErrors(userController.updateAccount));
router.post('/account/forgot', catchErrors(authController.forgot));
router.get('/account/reset/:token', catchErrors(authController.reset));
router.post('/account/reset/:token', 
    authController.confirmedPasswords,
    catchErrors(authController.update));

router.get('/api/search', catchErrors(storeControler.searchStores));

module.exports = router;
