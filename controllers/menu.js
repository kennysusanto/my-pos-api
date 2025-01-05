const express = require("express");
const router = express.Router();

const timeLog = (req, res, next) => {
    console.log("Time: ", Date.now());
    next();
};
router.use(timeLog);

router.get("/", (req, res) => {
    res.send("Menu home page");
});

router.get("/about", (req, res) => {
    res.send("About menu");
});

module.exports = router;
