import express from 'express';
// import pug from 'pug';
import ejs from 'ejs';
import ejsLayout from 'express-ejs-layouts';

const app = express()
app.use(express.static(__dirname + "/public"))
app.use(ejsLayout)
app.set("view engine", 'ejs')

// app.set('view engine', 'pug')

const username = "Foo";
const users = [
    {email : "john@test.com", age : 32},
    {email : "james@test.com", age : 33},
    {email : "jenny@test.com", age : 34},
]

app.get("/index", (req, res) => {
    res.render("pages/index",{
        username,
        users
    })
})

app.get("/contact", (req, res) => {
    res.render("pages/contact")
})

app.get("/home", (req, res) => {
    res.render("pages/home", {
        username,
        users
    })
})

app.listen(9091, () => console.log("Server started at PORT : 9091"))