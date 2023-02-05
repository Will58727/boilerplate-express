require('dotenv').config()
let express = require('express');
let app = express();


console.log("Hello World");
console.log(process.env.MENU_API_KEY);

//syntax for routes in express
    //res.send('response string');
    // function home(req, res) {
    // res.send('response String');
    // }


    // app.get('/', home);
    // app.get("/heading", (req, res) => res.send("<h3 style={{ color: 'blue' }}>Hello World</h3>"));


const pathToIndex = __dirname + "/views/index.html"
app.get('/', (req, res) => res.sendFile(pathToIndex));

const pathToAssets = __dirname + "/public"
app.use('/public', express.static(pathToAssets));

const pathToAbout = __dirname + "/views/about.html"
app.use('/about', express.static(pathToAbout));

const pathToContact = __dirname + "/views/contact.html"
app.use('/contact', express.static(pathToContact));



app.get("/json", (req, res) =>{
    let message = "Hello json";
    let name = "William"
    let age = 25;
    if (process.env.MESSAGE_STYLE == "uppercase") {
        message = message.toUpperCase();
        name = name.toUpperCase();
    }

    const jsonObj = {
        "message": message,
        "name": name,
        "age":age 
    }
    res.json(jsonObj)
});



app.get('/json', (req, res) => {res.json(jsonObj)});


module.exports = app;




























 module.exports = app;
