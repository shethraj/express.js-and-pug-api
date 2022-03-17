const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/create', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'TORQUE', "content": con}
    res.status(200).render('index.pug', params);
})

app.post('/create', (req, res)=>{
    assetname = req.body.name
    description = req.body.description
    owner = req.body.owner
    price = req.body.price
    more = req.body.more
    console.log(req.body)
    let outputToWrite = `the name of the asset is ${assetname}, It's description is ${description} , the current owner is ${owner}, selling at ${price}. More about asset is: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);

})
app.get('/market', (req, res)=>{
    const con = "this is basic marketplace"
    const params = {'title': 'TORQUE', "content": con}
    res.status(200).render('demo.pug', params);
})
app.get('/home', (req, res)=>{
    const con = "this is basic home page"
    const params = {'title': 'TORQUE', "content": con}
    res.status(200).render('demo.pug', params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
