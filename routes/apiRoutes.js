const router = require('express').Router();
const {test} = require("../controllers/testController")

// router.get("/test", (req, res) => {
//     res.send({msg: "success"})
// })

// Alternative from above code, split up now - test coming from controller object
router.get("/test", test);
// endpoint hit = "/test", controller run = "test"

module.exports = router;