const express = require("express");
const app = express();
const cors = require("cors");
const data = require("./data/country");
const fs = require('fs');
app.use(cors());
app.use(express.json());


//Server
app.listen(7000,() => {
    console.log(`server is Listening at port ${7000}`)
});

//Welcome Route
app.get('/', (req, res) => {
    res.send("Welcome to the Country API! Created by: Johnnie Hicks.")
});
// route for all the countries info
app.route('/:world',)
.get((req, res) => {
    if(req.params.world != 'world'){
        return(res.statusCode = 404,
            res.setHeader('Content-type', 'text/plain'),
            res.end("Error"))
    }
    res.send(data)
})

//TODO:
//update status codes
app.get('/world/:info',(req, res) =>{

    // storing the params in to a variable.
    let search = req.params.info.toLowerCase();
    // statement for the different abbrevations of america
    if(search === 'usa' || search === 'us' || search === 'america'){
        res.send(data[187])
    }
    //filter the data
    const country = data.filter( country => { 
       return( search === country.name.toLowerCase().replace(/\s/g, '') || search === country.currency || search === country.language.toLowerCase() || search === country.continent.toLowerCase() || search === country.capital.toLowerCase().replace(/\s/g, '') || search === country.hemisphere.toLowerCase().replace(/\s/g, ''))
    })

     //function for items that are not found
     if(country.length === 0 ){
        return( res.statusCode = 404,
         res.setHeader('Content-type', 'text/plain'),
         res.end("Error"))
     }
    res.send(country)
});
