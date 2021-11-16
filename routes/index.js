let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', {});
});

router.post('/new', function(req, res, next) {
  messages.push(
    {
      text: req.body.authorName,
      user: req.body.messageText,
      added: new Date()
    }
  )
  res.redirect('/');
});

module.exports = router;
