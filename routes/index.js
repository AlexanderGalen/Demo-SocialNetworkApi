const router = require('express').Router();
const apiRoutes = require('./api');

router.use("/api", apiRoutes);

router.get("*", (req, res) => {
    console.log("request recieved: " + req);
    res.status(404).send("Nothing here");
});

module.exports = router;