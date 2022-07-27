var express = require("express");
var router = express.Router();

var userList = [
  {
    id: 1,
    firstName: "Jesse",
    lastName: "Alvarez",
    email: "jesse.alvarez@codeimmersives.com",
  },
];

router.get("/get-users", function (req, res) {
  res.send(userList);
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/post-message", (req, res) => {
  // console.log(req.body);
  const clientMessage = req.body.clientMessage;
  const dateTime = new Date();
  const serverMessage = `Received client message: ${clientMessage}. Responded at ${dateTime.toString()}`;
  res.json({ serverMessage });
});

module.exports = router;
