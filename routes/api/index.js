const router = require('express').Router();

const { Thought, User } = require("../../models")
console.log(Thought, User);

router.get("/test", (req, res) => {res.send("test request recieved")});

module.exports = router;