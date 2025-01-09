/**
 * Data Structure in JavaScript
 *   - used to organize and manage the data effectively
 *
 * - Array
 *   - used to store multiple values in a single variable
 *   - arrays are ordered collection of elements or items that
 *     can hold multiple values
 *   - [] is called an array literal
 *   - index/subscript starts from 0
 *     - refers to the position of an elemets in the data structure
 *     - in JS , the array index are zero based (meaning the first elemtent starts from index 0)
 *
 *    Mutator Methods
 *      - these are functions that 'Mutate' or change and array after they are created
 *      - these methods manipulate the original array performing various tasks such as adding and removing elements
 *          @ push() - add and element in the end of an array and return the array's length
 *
 *             - stacks
 *               - last in first out data structures (LIFO) parang patong patong ng plato
 *
 *             - synatax - arrayName.push(element);
 *
 *          @ pop() - remove the last element in an array and returns the remove elements
 *
 *              - Syntax: arrayName.pop();
 *
 *          @ shift() - remove an element from the beginning of an array and returns the removed element
 *
 *               - queues - First In First Out (FIFO)
 *               - Syntax: arrayName.shift();
 *
 *           @ unshift() - adds an element to the beginning of an array and returns the new length of the array
 *
 *                - Syntax: arrayName.unshift(element);
 *
 *           @ splice() - simutaneously removes elemets from a specified index number and ad elements
 *
 *               - Syntax: arrayName.splice(startingIndex, deleteCount, elementToBeAdded);
 *
 *            @ sort() - rearranges the elements in alphabetical order
 *
 *                - Syntax: arrayName.sort();
 *
 *            @ reverse() - reverse the order of an array
 *
 *                - Syntax: arrayName.reverse();
 *
 *       None Mutator Methods
 *        - functions that do not modify or change an array after they created
 *        - these method do not manipulate the original array performing various tasks such as
 *          returning elements from an array and combining and printing the output
 */

/**
 * DISADVANATG OF ARRAY
 *  MUST USE SAME DATA TYPE TO IDENTIFY THE ARRAY
 */

let myBasket = ["Happy", 36, true, -90];
console.log(myBasket);

// OBJECT
let person = {
  name: "happy",
  age: 36,
  isSingle: true,
  isGrade: 90,
};
console.log(person);

//ARRAY
let beatles = ["John", "Paul", "Gringo", "George"];

console.log(`Current Array: `);
console.log(beatles);

let beatlesLength = beatles.push("Rob");
console.log(beatlesLength);
console.log(`Mutated array from beatles: `);
console.log(beatles);

/**
 *
 *
 * MUTATED METHODS BELOW
 *
 *
 */

//PUSH - add elements to the end of an array
beatles.push("Ken", "Jedd");

console.log(`Mutated array from push method: `);
console.log(beatles);

//POP -removes the last element
let removeMember = beatles.pop();
console.log(removeMember);
console.log(`Mutated array from pop method: `);
console.log(beatles);

//SHIFT - REMOVING THE FIRST ELEMENT
let anotherMember = beatles.shift();
console.log(anotherMember);
console.log(`Mutated array from shift method: `);
console.log(beatles);

//UNSHIFT - add elements to the beginning of an array
beatles.unshift("Yoko");
console.log(`Mutated array from unshift method: `);
console.log(beatles);

//SPLICE - add and remove elements from an array
beatles.splice(1, 2, "Jun", "Mark");
console.log(`Mutated array from splice method: `);
console.log(beatles);

//SORT -sort array in aplhabetical order
beatles.sort();
console.log(`Mutated array from sort method: `);
console.log(beatles);

//REVERSE - reverse the order of an array
beatles.reverse();
console.log(`Mutated array from reverse method: `);
console.log(beatles);

/**
 *
 * NON MUTATOR METHODS BELOW
 *
 */

/**
 *
 *  @ indexOf()
 *      - return the index number of the first element matching element found
 *        in an array
 *      - if no match was found, the result will return will be -1
 *      - the search process will be done from the first element proceeding
 *        to the last element
 *
 *      - Syntax:
 *          - arrayName.indexOf(searchValue);
 *          - arrayName.indexOf(searchValue, fromIndex);
 *
 *
 */

let countries = ["US", "PH", "CAN", "SG", "JP", "FR", "DE", "TH"];
console.log(countries);
let firstIndex = countries.indexOf("TH");
console.log(`Result of indexOf method: ` + firstIndex);

//INVALID INDEX
let invalidCountry = countries.indexOf("BR");
console.log(`Result of indexOf method: ` + invalidCountry);

/**
 *     @ lastIndexOf()
 *       - return the index of the last matching element found in an aray
 *       - the search process will be done from last proceeding to the first element
 *
 *       - Syntax:
 *           - arrayName.lastIndexOf(searchValue);
 *           - arrayName.lastIndexOf(searchValue, fromIndex);
 *
 *
 */

//Getting the index number starting from the last element
let lastIndex = countries.lastIndexOf("PH");
console.log(countries);
console.log(`Result of lastIndexOf method: ` + lastIndex);

//Getting the index number starting from a specific index
let lastIndexStart = countries.lastIndexOf("PH", 4);
console.log(countries);
console.log(`Result of lastIndexOf method: ` + lastIndexStart);

/**
 *
 *   @ slice()
 *      - portions/slices elements from an array and returns a new array
 *
 *      -syntax:
 *          - arrayName.slice(startIndex);
 *          - arrayName.slice(startIndex, endIndex);
 *
 *
 */

//Slicing from elements from a specified index to the last element
//Hinahati ung array depende kung anong index ang ilagay
console.log(countries);
let sliceArrayA = countries.slice(2);
console.log(`Result of slice method: ${sliceArrayA}`);

//Slicing of elements from a specified index to a another index
//Naka range kung hanggang saan ung i portion or slice
console.log(countries);
let sliceArrayB = countries.slice(1, 4); // 2 is the starting index and 5 is the ending index
console.log(`Result of slice method: ${sliceArrayB}`);

//Slicing off element starting from the last element of an array
//Hinahati simula dulo depende sa negative number kung anong index ang ilagay
console.log(countries);
let sliceArrayC = countries.slice(-3);
console.log(`Result of slice method: ${sliceArrayC}`);

/**
 *
 *   @ toString()
 *      - return an array as a string seperated by commas
 *
 *      - syntax:
 *          - arrayName.toString();

 */

//Gagawin nyan string ung array na naka seperate by commas
let stringArray = countries.toString();
console.log(countries);
console.log(`Result of toString method: ${stringArray}`);

//Example tostring in number index
let numString = [1, 2, 3, 4];
console.log(numString);
console.log(`Result of toString method: ${numString.toString()}`);

/**
 *
 *  @ concat()
 *       - combines two array and returns the combined result
 *
 *       - syntax:
 *           - arrayName.concat(arrayName2, arrayName3);
 *           - arrayName.concat(elementB);
 *
 */

// Combining arrays seperated by commas
let taskArrayA = ["Drink html5", "Eat javascript"];
let taskArrayB = ["Inhale css", "Breath sass"];
let taskArrayC = ["Get git", "Be Node"];

let tasks = taskArrayA.concat(taskArrayB);
console.log(`Result of concat method: ${tasks}`);

//Combining two or more arrays seperated by commas
let allTask = taskArrayA.concat(taskArrayB, taskArrayC);
console.log(`Result of concat method: ${allTask}`);

//Combining array with an element
let combineTasks = taskArrayA.concat("Small Express", "Throw react");
console.log(`Result of combined tasks concat method: ${combineTasks}`);

/**
 *
 *  @ join()
 *       - returns an arary as a string seperated by specified separator
 *
 *       - syntax:
 *           - arrayName.join('seperator string');
 *
 */

// Combining array depende sa anong gusto mong seperator string (default seperator is comma)
let users = ["nicole", "mark", "carl", "cedric"];
console.log(users);
console.log(`Result of join method: ${users.join(",")}`);
console.log(`Result of join method: ${users.join(" ")}`);
console.log(`Result of join method: ${users.join("-")}`);

/**
 *
 *  Iteration Methods
 *
 *
 *    - iteration methods are loops designed to perform repetitive tasks on array
 *
 *           - iteration methods loops overall items in an array
 *           - useful for manipulating array data resulting in complex tasks
 *           - array iteration methods normally work with a function supplied as an argument
 */

/**
 *
 *  @ forEach()
 *       - similar to a for loop that iterates on each array
 *       - for each item in the array, the anonymous function passed in the forEach() method
 *         will be run
 *
 *           - the anonymous function is able to received the current item being
 *             iterated or loop over by assigning a parameter
 *           - variable names for arrays are nomally writted in the
 *             plural from of the data stored in an array
 *
 *        - syntax:
 *            - arrayName.forEach(function(individualElement) {
 *                code to be executed
 *               })
 */

//Example of forEach
console.log("Items displayed using for each: ");

// allTask.forEach(function (task) {
//   console.log(`Task: ${task}`);
// });

//Using forEach with conditional statement

let filteredTask = [];

/**
 *  - it's a good practice to print the current element in the console
 *    when working with array iteration method to have an idea of what information
 *    is being worked for each for each iteration
 *  - creating a seperates variables to store results of array iteration
 *    methods are also good practice to avoid confusion by modifying the original array
 *
 *
 *
 */

allTask.forEach(function (task) {
  console.log(task);

  //if the element legth is greater than 10 characters
  //add the element to the filteredTask array

  if (task.length > 10) {
    filteredTask.push(task);
  }
});

console.log(`Filtered Task: ${filteredTask}`);

/**
 *  @ map()
 *       - iterates on each element and return new array with different
 *         values depending on the result of the functions
 *       - this is useful for performing tasks where mutatin/chaging the elements
 *         are required
 *
 *       - unlike the foreach method, map method requires a return in order to create another
 *         array with the perform operation
 *
 
 *       - syntax:
 *           - let/const resultarray  = arrayName.map(function(individualElement) {
 *                code to be executed
 *               });
 *
 *
 *
 */

// USING MAP METHOD return a new array
let numbers = [1, 2, 3, 4, 5];

let numbersMap = numbers.map(function (number) {
  return number * number;
});

console.log(numbers);
console.log(`Result of map method: ${numbersMap}`);

//map() vs forEach()

let numberForEach = numbers.forEach(function (number) {
  return number * number;
});

console.log(numbers);
console.log(`Result of forEach method: ${numberForEach}`); // undefined because forEach does not return a new array with the perform operation

/**
 *  @ every()
 *
 *      - check if all elements in an array meet the given condition
 *      -  this is useful for validating data stored in array
 *         specially when dealing with large amount of data
 *      - returns a true value if all elements meet the conditions
 *        and false if other wise
 *
 *      - syntax:
 *          - let/const resultarray  = arrayName.every(function(individualElement) {
 *               code to be executed
 *
 *               return expression/confition
 *              });
 *
 */

//check all elements in array are greater than 0
let allValid = numbers.every(function (number) {
  return number > 0;
});

console.log(`Result of every method: ${allValid}`);

/**
 *
 *  @ some()
 *
 *     - rcheck if at least one element in the array meets the given condition
 *     - returns a value if at least one element meets the condition and false if otheriwse
 *
 *
 *     - syntax:
 *          - let/const resultarray  = arrayName.some(function(individualElement) {
 *               code to be executed
 *
 *               return expression/confition
 *              });
 */

//check if at least one element in the array is greater than 3
let someValid = numbers.some(function (number) {
  return number < 3;
});

console.log(`Result of some method: ${someValid}`);

//combining the return result from the every and some methods may be used in other statements
// to perform consecutive result

if (someValid) {
  console.log("at least one element in the array is greater than 3");
}

/**
 *  @ filter()
 *
 *      - returns a new array with elements that meet the condition
 *      - this is useful for filtering data in an array
 *      - returns a new array with elements that meet the condition
 *      - return empty array if no elements meet the condition
 *
 *      - syntax:  let/const resultarray  = arrayName.filter(function(individualElement) {
 *               code to be executed
 *
 *               return expression/confition
 *              });
 *
 *
 */
// PINAG KAIBA NETO SA map ay ung map ay binbago ung laman ng array tapos gagawa ng new array
// si filter is ibabalik nya yung filter elements ng array ng walang binabago sa data
let filterValid = numbers.filter(function (number) {
  return number < 3;
});

console.log(`Result of filter method: ${filterValid}`);

//no elements found
let nothingFound = numbers.filter(function (number) {
  return number > 10;
});

console.log(`Result of filter method: ${nothingFound}`);

//filtering using foreach
let filteredNumbers = [];
numbers.forEach(function (number) {
  //   console.log(number);
  if (number < 3) {
    filteredNumbers.push(number);
  }
});
console.log(`Filtered Numbers: ${filteredNumbers}`);

/**
 *  @ includes()
 *
 *  - if the argument passed can be found in the array
 *    - it return boolean which can be saved in a varaible
 *       - returns true if the argument is foun in array
 *       - return false if it is not
 *
 *    - syntax:
 *        - let/const resultarray  = arrayName.includes(argumentToFind);
 */

//USE OF INCLUDES METHOD
let products = ["Mouse", "Keyboard", "Monitor, Avr"];

let productFound1 = products.includes("mouse");
console.log(productFound1); //true

let productFound2 = products.includes("headset");
console.log(productFound2); //false

/**
 *
 *   Method can be 'chained' using them one after another
 *
 *      - the result of the first method is used on the second until all
 *        chanined methods have been resolved
 *
 *           --- how chaining resolved in our example:
 *              1. the 'product' element will be covered into all lowercase
 *              2. the resulting lowercase string is used in the 'includes' method
 *
 */

let filteredProducts = products.map(function (product) {
  return product.toLowerCase();
});
console.log(filteredProducts);

/**
 *
 *  @ reduce()
 *    - evaluates the elements from left to right  and returns
 *      /reduce the array into a single value
 *
 *
 *     - syntax:
 *          - let/const resultarray  = arrayName.reduce(function(accumulator, currentValue) {
 *               code to be executed
 *
 *               return expression/operation
 *              });
 *
 *
 *       - accumulator parameter in function
 *        - stored the result to every iteration of the loop
 *        - the 'currentValue' is the current/next element in the array
 *          that is evaluated in each iteration of the loop
 *
 *
 *         ---- how the reduce method works:
 *              1. the first/result element in the array is stored in the 'accumulator'
 *                 parameter.
 *              2. the second/next element in the array is stored in the currentValue
 *              3. an opration is perforemed on the two elements
 *              4. the loop repeats step 1-3 until all elements have been worked on
 *
 *          Example:
 *              const numbers = [1, 2, 3, 4, 5];
 *              const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 *              console.log(sum); // 15
 *
 *
 */

//USE OF REDUCE METHOD
// ni rereduce sa sa iisang value

let iteration = 0;

let reduceArray = numbers.reduce(function (x, y) {
  //used to track the current iteration count and accumulator/currentvalue
  // data

  console.warn("current iteration: " + ++iteration);
  console.log("accumulator: " + x);
  console.log("currentValue: " + y);

  //operation to reduce the array int a single value
  return x + y;
});

console.log(`Result of reduce method: ${reduceArray}`);

//reducing string array
let list = ["Hello", "Again", "Love"];

let reducedSJoin = list.reduce(function (x, y) {
  return x + " " + y;
});

console.log(`Result of reduce method: ${reducedSJoin}`);
