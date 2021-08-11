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
//Write function to pull up country
app.get('/world/:country',(req, res) =>{
    console.log(req.params)
    res.send(data)
    let country = data
    console.log(country)
    res.send(country);
})


//function
function getCountry(){
    const countryData = fs.readFileSync(data);
    return countryData = JSON.parse(countryData);
}
