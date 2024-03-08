const express = require("express");
const {
  handleShowUserSignUp,
  handleShowUserLogin,
  handleAddNewUser,
  handleLoginUser,
  handleUserLogOut,
} = require("../controllers/user.js");

const router = express.Router();

router.get("/signup", handleShowUserSignUp);
router.get("/login", handleShowUserLogin);
router.post("/signup", handleAddNewUser);
router.post("/login", handleLoginUser);
router.get("/logout", handleUserLogOut);

module.exports = router;
