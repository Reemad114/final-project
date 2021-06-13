const express = require('express')
const app = express();

// ordered pages controllers
const home = require('./modules/pages/home/HomeController.js')
const users = require('./modules/general/user/UserController')
const contest = require('./modules/pages/contest/ContestController.js')
const contact = require('./modules/pages/contact_us/ContactUsController.js')
const book = require('./modules/pages/book/BookController.js')
const about = require('./modules/pages/about_us/AboutUSController.js')

const port = 8000;


app.get('/home', home.HomePage)
app.use('/contest', contest.ContestPage)
app.get('/contactus', contact.ContactUsPage)
app.get('/aboutus', about.About)
app.use('/book', book)
app.use('/users', users)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
