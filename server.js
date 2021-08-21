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

console.log(data[108].name.replace(' ', ''))

//TODO:
//figure out how to update data with spaces
app.get('/world/:info',(req, res) =>{
    
    const country = data.filter( country => { 
    
     const search = req.params.info;
     //search.replaceAll(" ", "");
       return( req.params.info.toLowerCase() === country.name.toLowerCase().replace(' ', '') || req.params.info === country.currency || req.params.info.toLowerCase() === country.language.toLowerCase() || req.params.info.toLowerCase() === country.continent.toLowerCase() || req.params.info.toLowerCase() === country.capital.toLowerCase().replace(' ', '') || req.params.info.toLowerCase() === country.currency.toLowerCase() || req.params.info.toLowerCase() === country.hemisphere.toLowerCase().replace(' ', ''))
       
    })
    res.send(country)
});
