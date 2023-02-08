require('dotenv').config()
let express = require('express');
let app = express();


console.log("Hello World");
console.log(process.env.MENU_API_KEY);
app.use(logMiddleware);
//syntax for routes in express
    //res.send('response string');
    // function home(req, res) {
    // res.send('response String');
    // }


    // app.get('/', home);
    // app.get("/heading", (req, res) => res.send("<h3 style={{ color: 'blue' }}>Hello World</h3>"));




    // change new assets to the same code as the index.html


const pathToIndex = __dirname + "/views/index.html"
app.get('/', (req, res) => res.sendFile(pathToIndex));

const pathToAssets = __dirname + "/public"
app.use('/public', express.static(pathToAssets));

const pathToAbout = __dirname + "/views/about.html"
app.get('/about', (req, res) => res.sendFile(pathToAbout));

const pathToContact = __dirname + "/views/contact.html"
app.get('/contact', (req, res) => res.sendFile(pathToContact));

const pathToRed = __dirname + "/views/red.html"
app.get('/red', (req, res) => res.sendFile(pathToRed));

const pathToBlue = __dirname + "/views/blue.html"
app.get('/blue', (req, res) => res.sendFile(pathToBlue));



app.get("/color", (req, res) =>{

    if (process.env.BG_COLOR == "red"){
        res.sendFile(pathToRed);
    }else{(process.env.BG_COLOR == "blue")
         res.sendFile(pathToBlue);
    }
});

function logMiddleware(req, res, next) {
    console.log(`${req.method} request was made to path: ${req.path} by IP: ${req.ip}`);
    next();
}

//authentication Middleware
function authenticationMiddleware(req, res, next) {
    const token = req.header("Authorization");
    if (token == "secret-token") {
        next();
    } else {
        res.status (401).send("Unauthorized");
    }
}




console.log(process.env.ENV_VARIABLE)


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

app.get("/users/:username", authenticationMiddleware, (req, res) => {
    const username = req.params.username;
    res.send(`Hello ${username}`);
})

app.get('/json', (req, res) => {res.json(jsonObj)});


module.exports = app;




























 module.exports = app;
