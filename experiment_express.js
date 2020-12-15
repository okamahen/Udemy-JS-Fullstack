/*
Before using this code, ensure that folder already accessed in VS Code, and install express.
First, access terminal with: ( ctrl + ` )
Then install express with npm install express
see file > node_modules and find express to verify installation
*/

let express = require("express")
let app = express()
//NOTE : tried to use focus to form input but does not work!

//Boilerplate code, used to enable express to catch HTML body object, see line 23
//Take submitted form data, and add on body object that lives in send().
app.use(express.urlencoded({extended: false}))

//get is from Express, it use 2 argument, 1st is for URL to look, 2nd is function that Express is going to run 
app.get('/', function(req, res) {
    //send is from Express, to send anything to the web, on this example we will send HTML syntax
    //respond for form will redirect to /answer page, use POST method
    res.send(`
    <form action="/answer" method="POST">
        <p>What color is the sky on a clear sunny day?</p>
        <input name="userInput" autocomplete="off">
        <button>Submit Answer</button>
    </form>
    `)
})

//Example for POST, to catch value on a form and send/post it to another page named "answer"
app.post('/answer', function(req, res) {
    //Out of box, Express will not add user input to the body object, so we need to execute line 5 (app.use)
    //Add method toUpperCase() from JS to convert input into all upper case, to accept variable input by user
    //To return to home, we just need to use anchor tag <a> with hyperlink (href) to "/" 
    if (req.body.userInput.toUpperCase() == "BLUE") {
        res.send(`
        <p> Congrats, ${req.body.userInput} is the correct answer</p>
        <a href="/">Back to homepage</a>
        `)
    } else {
        res.send(`
        <p> ${req.body.userInput} is a wrong answer! please try again.</p>
        <a href="/">Back to homepage</a>
        `)
    }
})

//Example for GET, for accessing another page by writing in address bar to page named "answer", can also work for navigation link
app.get('/answer', function(req, res) {
    res.send('GET request performed, answer not submitted.')
})

app.listen(3000)
