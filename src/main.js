// Phase I

/*
* You should make you completed
* each task step by step. Once you're done with one `Step`
* be sure to comment the previous console.log
* so you don't have tornado of console.logs
*/

// // Step 0 - require / import the carFn file

// var Car = require('./carFn')
// Car.sell('persis')
// Car.paint('blue')
// console.log(Car)

// // Step 1 - Checking all properties
// console.log the `Car` object, does it returns all the properties requested?

// // Step 2 - Run `Car.sell()` function
// `Car` object should be able to run `sell` function,
// and updates its existing object



// // Step 3 - Run `Car.paint()` function
// `Car` object should be able to run `paint` function,
// and updates its existing object


// Phase II

// // Repeat the same steps to Phase I, but this time require the the class file
// // instead of the the `carFn` file
var Car = require('./Car')
var newCar = new Car ('Honda', 'Vuzel', 2017, 'red', 7)
console.log(newCar)

var toyota = new Car ('toyota', 'rush', 2017, 'red', 7)
console.log(toyota)

toyota.sell('persis')
console.log(toyota.previousOwners)

// Phase III
