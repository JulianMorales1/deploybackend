var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/post-message", (req, res) => {

  console.log(req.body)
  const clientMessage = req.body.clientMessage
  const dateTime = new Date()
  const serverMessage = `Received client message: ${clientMessage}. Responded at ${dateTime.toString()}`
  res.json({ serverMessage })
})

module.exports = router;
