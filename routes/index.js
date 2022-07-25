var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/post-message", (req, res) => {
  const clientMessage = req.body.clientMessage
  const dateTime = new Date()
  const serverMessage = `Received client message: ${clientMessage}. Responded at ${dateTime.toString()}`
  res.send(serverMessage)
})

module.exports = router;
