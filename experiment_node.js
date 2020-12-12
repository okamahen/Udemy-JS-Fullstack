/*
===========================
This section is for training notes about node.js
Using VS Code as basic text editing software
Using express.js for javascript framework
===========================

1). Download and install the latest version in node.js (preferably using the latest LTS version of node
2). Wait until installation completed
3). To test, go to terminal (search command in start) and type: node -v, if showing version, node successfully installed
4). Create folder to run the code, and access it in VS Code (By drag-drop to VS Code, or By open file/folder tab)
5). To run the code in runtime without opening webpage;
    a. Access terminal via VS Code with: ( ctrl + ` )
    b. Run the code with command: ( node yourFileName.js ), all ( console.log ) result will be displayed in the same page
    c. When running code using: ( http ) and ( listen: ), to stop code from running use: ( ctrl + c )
5). To install express, now use VS Code, open terminal via VS Code, and type : npm install express
5). Wait until installation completed

*/

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
