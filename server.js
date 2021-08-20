const express = require("express");
const app = express();
const cors = require("cors");
const data = require("./data/country");
const fs = require('fs');
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

//TODO:
//figure out how to update data with spaces
app.get('/world/:info',(req, res) =>{
    console.log(data);
    const country = data.filter(country => req.params.info=== country.name || req.params.info === country.currency || req.params.info === country.language || req.params.info === country.continent )
    res.send(country)
});