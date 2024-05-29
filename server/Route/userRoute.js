const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');



router.get('/dashboard',userController.dashboardPage);

router.get('/kyc',userController.verifyPage);
router.get('/kyc-form', userController.kycformPage)
router.get('/kyc_form_upload/:id', userController.kycPage)
router.post('/verify/:id', userController.verifyPage_post);

router.get('/settings/:id', userController.settingPage)
router.put('/settings/:id',userController.settingPage_post)

router.get('/editProfile',userController.editProfilePage);
router.get('/trade-history/:id',userController.transactionPage);
// router.get('/t-history:id', userController.tradehistoryPage)

router.get('/market',userController.marketPage);

router.get('/signal',userController.signalPage)

router.get('/deposit', userController.depositPage);
router.post('/deposit/:id', userController.depositPage_post);

router.get('/withdrawal_info/:id',userController.widthdrawInfo);
router.put('/withdrawal_info/:id',userController.widthdrawInfo_post);
router.get('/withdraw',userController.widthdrawPage);
router.post('/widthdraw/:id',userController.widthdrawPage_post);
router.get('/widthdrawHistory/:id',userController.widthdrawHistory);

 router.get('/crypto', userController.buyCrypto)
 router.get('/change_password/:id', userController.changePassword)

module.exports = router;

