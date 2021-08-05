const express = require('express')
const app = express();
const multer = require("multer");
const path = require("path");

// ordered pages controllers
const home = require('./modules/pages/home/HomeController.js')
const users = require('./modules/general/user/UserController')
const contest = require('./modules/pages/contest/ContestController.js')
const contact = require('./modules/pages/contact_us/ContactUsController.js')
const firsdest = require('./modules/pages/first_dest/firstController')
const book = require('./modules/pages/book/BookController.js')
const about = require('./modules/pages/about_us/AboutUSController.js')
const flight = require('./modules/parts/header/search/flight/flights')
const DB = require('./database')

const port = 8000;


app.get('/home', home.HomePage)
app.get('/contest', contest.ContestPage)
app.get('/contactus', contact.ContactUsPage)
app.get('/firstdest', firsdest.FirstPage)
app.get('/aboutus', about.AboutPage)
app.use('/book', book.BookPage)
app.use('/users', users)
app.use('/flight', flight)


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' +file.originalname)
  }
})

const upload = multer({ storage: storage }).single('file')

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.sendStatus(500);
    }
    res.send(req.file);
  });
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
