const express = require("express");

const router = express.Router();

const { homePage, aboutPage, contactPage, faqPage, termsPage,  registerPage, loginPage, register_post, login_post, logout_get, loginAdmin, investmentPage, servicesPage } = require("../controllers/userController");
const { loginAdmin_post } = require("../controllers/adminController");

router.get("/", homePage);

router.get("/about", aboutPage);

router.get("/services", servicesPage);

router.get("/contact", contactPage);

router.get("/faq", faqPage);

router.get("/terms", termsPage)

router.get("/investments", investmentPage);


router.get("/register", registerPage);
router.post("/register", register_post);

router.get("/login", loginPage);
router.post("/login", login_post)

router.get('/loginAdmin', loginAdmin);
router.post('/loginAdmin', loginAdmin_post)

router.get("/logout",logout_get)









module.exports = router;