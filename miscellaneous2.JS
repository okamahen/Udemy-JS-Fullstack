// Function Hoisting : the way javascript move a function virtually above the call method (in this case, cool() )
// Basically, the function need to be declared first before calling, but javascript can handle it with virtually moving the functoin before calling, making it able to do as below
// Only function created with function() syntax that will automatically hoisted
cool()

function cool() {
  console.log("Testing Cool")
}

// Below is example function not being hoisted, because using another method to create function (in this case, let ) , same with other method to create function other than function()
//console.log(strawberryCount)
//let strawberryCount = 100

// Template Literals : Method to access variable within string
let myname = "jobina"
// This is the common way to access variable
console.log("hello, my name " + myname + " nice to meet you")
// This is template literal, no need to leave string and enter again with + sign, just call using ${}, need with back tick
console.log(`hello, my name is ${myname} and nice to meet you`)
