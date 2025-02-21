var express = require("express");
var router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello there!",
        user: "Charles",
        added: new Date(),
    },
];
/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});
router.get("/new", function (req, res, next) {
    res.render("form");
    console.log(messages);
});
router.post("/new", function (req, res, next) {
    console.log(messages);
    const messageText = req.body.message;
    const messageUser = req.body.author;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");
});

module.exports = router;
