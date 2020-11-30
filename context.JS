// The "this" keywod points towards the object that is executing the current function

let john = {
    firstName: "John",
    lastName: "Doe",
    driveCar() {
        function functionNotMethod() {
          console.log(this)
}
        functionNotMethod()
        console.log(this.firstName + " " + this.lastName + " is driving a car.")
    }
}

john.driveCar()

//During execution, there will be 2 item found in the console : "window..."" and  "John Doe is driving a car". When we execute john.driveCar(), the first thing to run in console is functionNotMethod(), and "this" item that was called by functionNotMethod does not have any object, that is why console shows the global object which having "window...".

//The second thing to run in console is john.driveCar() method, and "this" item explicitly called by john object and able to select item inside the object, that is why the second line shows "John Doe is driving a car" which is the items inside john object.

function breathe() {
  console.log(this.firstName + " " + this.lastName + " just watched television.")
}

breathe()
/* This will return as below :
"undefined undefined just watched television"
As a result function breathe() does not have any objects that is executing the function, hence it will call the global function.
*/

breathe.call(john)
/* This will return as below :
"John Doe just watched television"
The function breathe() using "call" method to call john, and as the result, "john" object is executing the function breathe(), and now have access to all item inside the object.
*/
