const router = require('express').Router();
const { User } = require("../../models/")

// get for all users
router.get("/", async (req, res) => {
    let allUsers = await User.find({});
    
    if(allUsers) {
        res.status(200).json(allUsers);
    }
    else {
        res.status(500).send("something went wrong");
    }

})

// get for single user by _id
router.get("/:userId", async (req, res) => {
    let user = await User.findById(req.params.userId);
    if(user) {
        res.status(200).json(user);
    }
    else {
        res.status(500).send("something went wrong");
    }
});

// post for creating new user
router.post("/", async (req, res) => {
    let newUser = await User.create(req.body);
    if(newUser) {
        res.status(200).json(newUser);
    }
    else {
        res.status(500).send("something went wrong");
    }
});

router.delete("/", async (req, res) => {
    let deletedUser = await User.findByIdAndDelete(req.body.userId);
    if(deletedUser) {
        res.status(200).json(deletedUser);
    }
    else {
        res.status(500).send("something went wrong");
    }
})

module.exports = router;