var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Akeem Lanade' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About page. */
router.get('/About', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET projects. */
router.get('/Projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Contact page. */
router.get('/Contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
