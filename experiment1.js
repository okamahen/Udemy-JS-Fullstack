let http = require("http")

//http is special in node, and createServer is the method of http in node
let serverStart = http.createServer(function(req, res){
    if (req.url == "/") {
        res.end("Hello and welcome to our homepage.")
    } else if (req.url == "/about") {
        res.end("Entering about page.")
    } else {
        res.end("Page not found try again.")
    }

})

//Using listen to check on port 3000
serverStart.listen(3000)