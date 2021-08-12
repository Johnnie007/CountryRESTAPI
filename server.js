const express = require("express");
const app = express();
const cors = require("cors");
const data = require("./data/country");
const fs = require('fs');
const { count } = require("console");
app.use(cors());
app.use(express.json());

app.listen(7000,() => {
    console.log(`server is Listening at port ${7000}`)
});

app.get('/', (req, res) => {
    res.send("Welcome to the Country API! Created by: Johnnie Hicks.")
});

app.route('/world',)
.get((req, res) => {
    res.send(data)
})

//app.route('/:country')
//TODO:
// Update route to uppercase or lower case.
//Write function to pull up country
app.get('/world/:country',(req, res) =>{
    const country = data.find( ({name}) => name === req.params.country)
    console.log(country)
    res.send(country)
})


//function
