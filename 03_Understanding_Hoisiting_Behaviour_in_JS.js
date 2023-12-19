/*


# Understanding Hoisting:

--> The "var" keyword exhibits hoisting, where variable declarations are moved to the top of the program during compilation. This allows you to reference a variable before its declaration, but only the declaration is hoisted, not the assignment.


*/




/*


// Example-1: 


console.log(a); 
var a = 10; 

// Output: "undefined" 

// Explanation: The use of "var" keyword exhibits hoisting, where variable declarations are moved to the top of the scope during compilation. In this case, only the declaration of variable "a" is hoisted, not the assignment. So, when the console.log is executed, "a" is declared but not yet assigned a value, resulting in "undefined".  


*/




// Example-2: 

var a1 = 10;
console.log(a1);
var a1;

// Output: 10

// Explanation: The declaration "var a1;" is hoisted to the top, so when the value is assigned and the variable is used, it already exists in the scope. 




/*



$ It's important to note that while this above behavior exists, it is still not considered a good coding practice to write your codes like above code snippet. Code clarity and readability are enhanced by declaring and initializing variables in a clear and sequential manner, always write your code properly. 


$ The "var" keyword is now considered obsolete in modern JavaScript, and it is recommended to use "let" and "const" for variable declarations. 



# Example with "let" or "const": 


// This will result in a ReferenceError: 
console.log(b);
let b = 20;


// This will result also result in a ReferenceError: 
console.log(c);
const c = 30;



$ It is advised to declare variables using "let" or "const" only for better scoping and to avoid unexpected behavior.



// - - - - - - - - - - 



# Variables declared with "let" and "const" are not initialized with default value "undefined" when they're hoisted that's why we get "Reference Error" when we try to access them when these variables are in the "temporal dead zone", but when we reach the point in the code where these variables are actually declared, if their also you've not intialized them with any value, then this does't mean that these variables will still not get any default values assigned, both "let" and "const" behave differently in this scenario. 



@ In the case of "const" keyword, you cannot really declare a constant like this 

const x; 

- This above line of code leads to SyntaxError because it's compulsory to initialize a constant with a value when you're declaring it using a const keyword, because deafult values are not assigned to constants in JavaScript 



@ In the case of "let" keyword, when you reach the point in the code where you've actually declared the variable, if you don't find any value by with the variable is getting initialized then at that point the default value "undefined" is assigned to that variable: 

let y; 
console.log(y);

// Output: undefined 



*/




/*


# References Cited: 


* Harkirat Singh's 100xDevs Cohort-2 (0-100): 
https://harkirat.classx.co.in/ 


* ChatGPT: 
https://chat.openai.com/ 



*/