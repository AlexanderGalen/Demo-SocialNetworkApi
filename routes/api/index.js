const router = require('express').Router();

router.get("/test", (req, res) => {res.send("test request recieved")});

module.exports = router;