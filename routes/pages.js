const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();
router.get('/', authController.isLoggedIn, (req, res) => {
    res.sendFile("main.html", { root: './public/' })
});
router.get('/register', (req, res) => {
    res.sendFile("register.html", { root: './public/' })
});
router.get('/login', (req, res) => {
    res.sendFile("login.html", { root: './public/' })
});

module.exports = router;