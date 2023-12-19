// var, let and const are three keywords which can be used to declare variables in JavaScript: 



// Using var (not commonly used nowadays):
var a1;
a1 = 200;
console.log(a1);



// Using let:
let a2;
a2 = 100;
console.log(a2);



/*

// This gives an error:

const a3 = 1;
a3 = 2;
console.log(a3);

// const keyword is used to declare constants, and once a value is assigned, it cannot be reassigned.

*/





/*



$ In modern JavaScript, "var" is not commonly used. It was the original way to declare variables earlier. 



# Why "let" and "const" Keywords were Intoduced, and Why "var" is Not Preferred Nowadays to Declare Variables: 


--> The let and const keywords in JavaScript were introduced in ECMAScript 6 (ES6), which was finalized in 2015. These keywords were introduced to address certain issues and limitations associated with the use of the var keyword, which had been the primary way to declare variables in JavaScript prior to ES6. 


// - - - - - - - - - - 


@ Here are some key reasons why let and const were introduced and why they are preferred over var in many cases:



1. Block Scope:

--> One of the significant issues with var is that it has function scope rather than block scope. 
--> This means that a variable declared with var is accessible throughout the entire function in which it is declared, even if it is inside a block (like an if statement or a loop). This behavior can lead to unintended variable hoisting and scoping issues. 

==> let and const introduce block scoping, meaning they are limited to the block in which they are defined (e.g., inside a loop or an if statement). This helps in creating more predictable and maintainable code. 



2. Hoisting:

--> Variables declared with var are hoisted to the top of their scope with a default initialization of "undefined". Which means the declaration is moved to the top during the compilation phase and the variable gets initialized with a default value "undefined". However, the actual initialization of the variable remains in the same place in code and due to "unsafe hositing nature of var keyword" a variable which is declared with a "var" can be accessed before the line in which it's actually declared. 

==> Variables decared with let and const are also hoisted but they're hoisted without a default initialization, and this makes them inaccessible (as such variables are in a temporal dead zone). When these variables are in a "Temporal Dead Zone" accessing them results in a ReferenceError. This behavior helps catch potential issues earlier in the development process.

==> The temporal dead zone (TDZ) is a specific period in the execution of JavaScript code where variables declared with let and const exist but cannot be accessed or assigned any value. During this phase, accessing or using the variable will result in a ReferenceError. 



3. Immutability with const:

==> The const keyword is introduced to declare constants. Once a variable is declared with const, its value cannot be reassigned. This helps in creating immutable variables, which can improve code reliability and prevent unintended changes.

==> Variables declared with let can be reassigned, providing a more flexible option when you need to modify the value of a variable.



4. Global Object Property Creation:

--> Variables declared with var are added as properties to the global object (e.g., window in a browser environment). This can lead to unintentional global variable declarations and conflicts.

--> let and const do not create properties on the global object when declared in the global scope, reducing the risk of naming conflicts.



$ In summary, the introduction of let and const in ECMAScript 6 aimed to address scoping issues, hoisting problems, and the lack of a built-in mechanism for declaring constants in JavaScript. Their adoption has become common in modern JavaScript development, and the use of var is often discouraged due to the advantages provided by let and const.



*/ 




/*


# References Cited: 


* Harkirat Singh's 100xDevs Cohort-2 (0-100): 
https://harkirat.classx.co.in/ 


* Medium (What is the temporal dead zone in JavaScript, and how does it relate to let and const?): 
https://umarfarooquekhan.medium.com/what-is-the-temporal-dead-zone-in-javascript-and-how-does-it-relate-to-let-and-const-33c93c1df291 


* freeCodeCamp (Hoisting in JavaScript with let and const – and How it Differs from var): 
https://www.freecodecamp.org/news/javascript-let-and-const-hoisting/


* ChatGPT: 
https://chat.openai.com/ 



*/