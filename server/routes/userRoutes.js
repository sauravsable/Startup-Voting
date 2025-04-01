const express = require('express');
const {registerUser, 
       loginUser,
       getUserDetails,
       logout,
       updatePassword,
       updateUserProfile,
       } = require('../controllers/userController');

const {isAuthenticatedUser} = require('../middleware/auth');

const multer = require('multer');
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({storage:storage});

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/me").get(isAuthenticatedUser,getUserDetails);

router.route("/logout").get(logout);

router.route("/password/update").put(isAuthenticatedUser,updatePassword);

router.put("/me/update",isAuthenticatedUser,updateUserProfile);


module.exports = router;