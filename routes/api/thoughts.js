const router = require('express').Router();

const { Thought, User } = require("../../models/")

// get for all thoughts
router.get("/", async (req, res) => {
    let allThoughts = await Thought.find({});
    
    if(allThoughts) {
        res.status(200).json(allThoughts);
    }
    else {
        res.status(500).send("something went wrong");
    }

})

// get for single thought by _id
router.get("/:thoughtId", async (req, res) => {
    let thought = await Thought.findById(req.params.thoughtId);
    if(thought) {
        res.status(200).json(thought);
    }
    else {
        res.status(500).send("something went wrong");
    }
});

// post for creating new thought
router.post("/", async (req, res) => {
    let result = await Thought.create(req.body);

    // use id from result in users thoughts array
    let userResult = User.findOneAndUpdate({username: req.body.username}, {$push: {thoughts: result._id}} );
    if(userResult) {
        res.status(200).json(result)
    }
    else {
        res.status(500).send("Something went wrong");
    }
});

router.delete("/", async (req, res) => {
    let deletedThought = await Thought.findByIdAndDelete(req.body.thoughtId);
    console.log(deletedThought);
    if(deletedThought) {
        res.status(200).json(deletedThought);
    }
    else {
        res.status(500).send("something went wrong");
    }
})


module.exports = router;
