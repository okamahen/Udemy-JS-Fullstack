/* This course purpose to explain below
1). Scope : How javascript handle Variable, ex let variable = a
2). Context : How javascript handle Object, ex let object = [{a = 1, ...}]
*/

// 1). Scope >> Where can we access variable from?
/* Scoping works from "inside-out",means it will try to find
any variable from the nearest function, and move outwward.
*/

// Example a : Is working, console.log(myName) will try
// to find myName variable. Since nothing inside the amazingFunction block,
// it try to find outward, and found in line 14
let myName = "Sabina the first"

function amazingFunction() {
    console.log(myName)
    // This method will find myName, from this block to outward
}

amazingFunction()


// Example b : Is not working, because myName2 is inside the function,
// so console log cannot reach from outward to inward
function amazingFunction2() {
    let myName2 = "Sabina the second"
}

amazingFunction2()
console.log(myName2)


// Example c: Is working, and will print out "Sabina the second"
// because it found the first variable inside function
// Eventhough there are 2 variable under name myName3, the one in line 38
// and the one in line 42 is independent from each other
let myName3 = "Sabina the first"

function amazingFunction3() {
    if(1+1 == 2) {
        let myName3 = "Sabina the second"
        console.log(myName3)
    }
}

amazingFunction3()


// Example D: Change value on global variable
let myName4 = "Jobina"

function amazingFunction4() {
    if(1+2 == 3) {
        myName4 = "Jobina the Master"
    }
}

amazingFunction4()

/* At 2020, now we are encouraged to create variable using
let instead of var, difference as below :
let use block scope >> Access anything within a block {}
var use function scope >> Only access the function block {}
*/
