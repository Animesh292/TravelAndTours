const express = require("express");
const User = require("../models/user");
const path = require("path");

async function handleShowUserSignUp(res, res) {
  return res.render(path.resolve("public/signup.ejs"));
}

async function handleShowUserLogin(req, res) {
  return res.render(path.resolve("public/login.ejs"));
}

async function handleAddNewUser(req, res) {
  const { fullName, email, password } = req.body;
  await User.create({
    fullName,
    email,
    password,
  });
  return res.redirect("/user/login");
}

async function handleLoginUser(req, res) {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    // console.log("token", token);
    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render(path.resolve("public/login.ejs"), {
      error: "Invalid email or password!",
    });
  }
}

async function handleUserLogOut(res, res) {
  return res.clearCookie("token").redirect("/");
}

module.exports = {
  handleShowUserSignUp,
  handleAddNewUser,
  handleShowUserLogin,
  handleLoginUser,
  handleUserLogOut,
};
