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

  const clientMessage = req.body.clientMessage;
  const dateTime = new Date();
  const serverMessage = `Received client message: ${clientMessage}. Responded at ${dateTime.toString()}`;
  res.json({ serverMessage });
});


const userList = [{
  id: 1,
  firstName: "John",
  lastName: "Doe",
  email: "jd@gmail.com"
}];

router.post("/create-user", (req, res) => {
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email
  const id = userList.length + 1

  const newUser = {
    id,
    firstName,
    lastName,
    email
  }
  userList.push(newUser)


  res.status(200).json({ success: true })
})


module.exports = router;
