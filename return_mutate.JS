// Code on Udemy Training Week 1

// Create new object with name "pets"
let pets = [
  {name: "Meowsalot", species:"cat", age: 2},
  {name: "barksalot", species:"dog", age: 3},
  {name: "Purrsloud", species:"cat", age: 8}
]

// Add new object
// Below to demonstrate that a function able to return value and mutate/change value
// When push method run, it add new object, and return the value of total array (4) and what inside
// Commented : pets.push({name: "Purrsloud", species:"dog", age: 1})

// Check how much object inside pets as demo of return
console.log(pets.push({name: "Purrsloud", species:"dog", age: 1}))

// View result in console
// console.log(pets)

// Create function named mapTest(), for this example, function created first before creating variable
function mapTest() {
  return "Hello"
}
// For this example, nameOnly() function will be called 4 times, so new array will be formed with 4 times "hello"

// map() only return value, set into variable to use later.
// IMPORTANT! as map() is higher order function, it accept any function() as argument. So, we can use function called mapTest() as argument
let myTest = pets.map(mapTest)
// map() works to run nameOnly() function once, for each object in array pets[], 4 objects

// see what is inside myTest() variable
console.log(myTest)


// Now, we create new variable named newTest() to check on map, with goals to catch the "name" on pet array[]
let newTest = pets.map(nameOnly)
// The idea is, map() function not only get access to see all objects, but also to return value of each item on each object, so we want to catch "name" item

// Now for this test, function created after variable newTest() is declared
function nameOnly(catch_name){
  return catch_name.name
}
// Now in this function we do not return "hello", but return each "name" item from each object

// This will show what si the result contained by variable newTest
console.log(newTest)


// Below is example of to get filter() method
// IMPORTANT!! filter() is also a higher order function so can accept function as argument
let viewDogs = pets.filter(fDogs)

// Now create function fdogs(), the same one with variable viewDogs, as fDogs called in filter(), the funciton can filter the object based on selected character
function fDogs(selected_species) {
  return selected_species.species == "dog"
}

//view result
console.log(viewDogs)

// Last example, we want to add function to filter () age, and try to chain all function
function onlyBabies(selected_age) {
  return selected_age.age < 3
}

// Now we only want to filter dog, and filter only baby, and show only the name of the item
let showBabyDogName = pets.filter(fDogs).filter(onlyBabies).map(nameOnly)
// We can cut map() method to show all item in object contains dog and baby, and when we add map we now able to access only the name of the baby

// View result
console.log(showBabyDogName)

// FINAL NOTE //
/* 
1. This example shows that function can be declared before or after the variable declaration, and both are connected as the function is now part of another function (higher function) as argument.

2. Each array have access to method. This means not only array that was contained in variable (in this example, pets), but also array created during process such as filter(fDogs), is considered array and able to access another filter method using mfilter(onlyBabies) and map(nameOnly), eventhough not contained in any variable.

3. As the result of note number 2, the method can be chained to manipulate the array, and get new array. 
*/