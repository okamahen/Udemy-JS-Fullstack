// Anonymous Function : function that does not have name to call ; function() {}, mostly used as one time function call
document.addEventListener("click", function() {
  alert("User Clicked")
})

// Arrow Function : special syntax to create minimalistic function; =>, no need for function before ()
document.addEventListener("click", () => {
  alert("User Clicked Using Arrow Function")
})

// Create more minimalistic Arrow Function : as long as the syntax is in 1 line, no need for {} 
document.addEventListener("click", () => alert("Clicked With Minimalistic Arrow"))

// Suppose we want to use arrow function for our code below :
let myNumbers = [10, 50, 200]
let doubledNumbers = myNumbers.map(function(c) {
  return c*2
})
console.log(doubledNumbers)

// Another feature on arrow function ; if variable only one we can omit () for this example (c) reduced only with c, and we can also omit return as it is implied with arrow function
// We cannot omit multiple or no variable!!
let doubledNumbers = myNumbers.map(c => c*2)
console.log(doubledNumbers)


// Example from context.JS, "this" inside functionnotMethod() refers to global object, to change "this" to pointing john object, we can use "call" method, or arrow function as below
// Below able to point "this" to john object, due to "this" in Arrow Function works in scope as we learned in scope lesson, not in traditional "this" lookup method in context, so instead of assigning to global function, it will assign to the next object calling the method, which is john object
let john = {
    firstName: "John",
    lastName: "Doe",
    driveCar() {
        let functionNotMethod = () => console.log(this)
        functionNotMethod()
        console.log(this.firstName + " " + this.lastName + " is driving a car.")
    }
}

john.driveCar()

// Function hoisting
