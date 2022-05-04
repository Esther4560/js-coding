
/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/


/* Data types basically specify what kind of data can be stored and manipulated within a program.

There are six basic data types in JavaScript which can be divided into three main categories: primitive (or primary), 
composite (or reference), and special data types. String, Number, and Boolean are primitive data types. Object, Array, 
and Function (which are all types of objects) are composite data types. Whereas Undefined and Null are special data types.
Primitive data types can hold only one value at a time, whereas composite data types can hold collections of values and more complex entities. 


The String Data Typeignm
The string data type is used to represent textual data (i.e. sequences of characters). 
Strings are created using single or double quotes surrounding one or more characters, as shown below:
var a = 'Hi there!';  // using single quotes
var b = "Hi there!";  // using double quotes

The Number Data Type
The number data type is used to represent positive or negative numbers with or without decimal place, 
or numbers written using exponential notation e.g. 1.5e-4 (equivalent to 1.5x10-4).
example
ar a = 25;         // integer
var b = 80.5;       // floating-point number
var c = 4.25e+6;    // exponential notation, same as 4.25e6 or 4250000
var d = 4.25e-6;    // exponential notation, same as 0.00000425 

The Boolean Data Type
The Boolean data type can hold only two values: true or false. 
It is typically used to store values like yes (true) or no (false), on (true) or off (false), etc. 
as demonstrated below:
var isReading = true;   // yes, I'm reading
var isSleeping = false; // no, I'm not sleeping

Boolean values also come as a result of comparisons in a program. example
var a = 2, b = 5, c = 10;
 alert(b > a) // Output: true
alert(b > c) // Output: false

The Undefined Data Type
The undefined data type can only have one value-the special value undefined. 
If a variable has been declared, but has not been assigned a value, has the value undefined
example
var a;
var b = "Hello World!"
 
alert(a) // Output: undefined
alert(b) // Output: Hello World!.

The Null Data Type
This is another special data type that can have only one value-the null value. A null value means that there is no value. It is not equivalent to an empty string ("") or 0, it is simply nothing.

A variable can be explicitly emptied of its current contents by assigning it the null value.

The Object Data Type
The object is a complex data type that allows you to store collections of data.

An object contains properties, defined as a key-value pair. A property key (name) is always a string, 
but the value can be any data type, like strings, numbers, booleans, or complex data types like arrays, function and other objects.

The Array Data Type
An array is a type of object used for storing multiple values in single variable. Each value (also called an element) in an array has a numeric position, known as its index, and it may contain data of any data type-numbers, strings, booleans, functions, objects, and even other arrays. The array index starts from 0, so that the first array element is arr[0] not arr[1].

The Function Data Type
The function is callable object that executes a block of code. Since functions are objects,
 so it is possible to assign them to variables.
 */

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/*In my words a variable ia any characteristics,number or quantity that can be measured an counted,
eg age,sex,business income etc */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let result = 12 + 20;
console.log("32");

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;
console.log("x=12")

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";


/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let example = 12 - x;

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";
console.log(name1 === name2);
console.log(name1.toLowerCase() === name2.toLowerCase());

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

x = 8;
if (x === 1) {
  console.log("one");
} else if (x === 2) {
  console.log("two");
} else if (x === 3) {
  console.log("three");
} else if (x === 4) {
  console.log("four");
} else if (x === 5) {
  console.log("five");
} else if (x === 6) {
  console.log("six");
} else if (x === 7) {
  console.log("seven");
} else if (x === 8) {
  console.log("eight");
} else if (x === 9) {
  console.log("nine");
} else {
  console.log("not a valid number!");
}

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let ternary = x > 8 ? true : false;


/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/


