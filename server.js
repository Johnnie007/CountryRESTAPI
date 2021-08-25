const express = require("express");
const app = express();
app.use(express.static('public'))
const data = require("./data/country");

//Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
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
       return res.send(data[187])
    } 
    //filter the data
    const country = data.filter( country => { 
       return( search === country.name.toLowerCase().replace(/\s/g, '') || search === country.currency.toLowerCase() || search === country.language.toLowerCase() || search === country.continent.toLowerCase() || search === country.capital.toLowerCase().replace(/\s/g, '') || search === country.hemisphere.toLowerCase().replace(/\s/g, ''))
    })

     //function for items that are not found
     if(country.length === 0 ){
        return( res.statusCode = 404,
         res.setHeader('Content-type', 'text/plain'),
         res.send("ERROR PLEASE CHECK URL"))
     }
    res.send(country)
});
