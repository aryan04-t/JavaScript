/*



# History of JavaScript: 

--> JavaScript was created by Brendan Eich while he was working at Netscape Communications Corporation in 1995. 
--> 1st JavaScript was named "Mocha", after some time language was renamed to "LiveScript", and finally, JavaScipt was named "JavaScript". 
--> JavaScript was named "JavaScript" due to marketing purpose, because Java was a popular in those times when JavaScript was striving to gain popularity 
--> Java and JavaScript have no relations, both of them are totally different and they're totally unrelated programming languages. 
--> The naming of JavaScript was influenced by marketing and business considerations rather than technical similarities. 



// - - - - - - - - - - 



# JavaScript as a Scripting and Prototype based Programming Language: 


$ JS is a scripting language which supports object-oriented programming, but it doesn't strictly follow classical Object-Oriented Programming (OOP) concepts like some other languages such as Java or C++. Instead, JavaScript is a prototype-based language.

$ In prototype-based programming, objects can serve as prototypes for other objects, and inheritance is achieved through the prototype chain. 



// - - - - - - - - - - 



@ What is a Scripting Language: 

--> A scripting language is a type of programming language that is interpreted rather than compiled. 
--> In contrast to compiled languages, where the code is translated into machine code before execution, scripting languages are executed by an interpreter at runtime. 
--> This means that the source code is read and executed line by line, without the need for a separate compilation step.



// - - - - - - - - - - 



# JavaScript as an Interpreted Language:


- JavaScript is an interpreted language, which means it is executed line by line by the interpreter, and there is no compilation involved in the process. 

- Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a browser. 

- Next.js was created by "Guillermo Rauch", a software engineer at Vercel, and is maintained by a team of developers at Vercel. It is an open-source project, and you can find the source code on GitHub.

- JavaScript is a dynamically typed language, allowing flexibility in variable and constant declarations without the need to specify data types explicitly. 

- In contrast to languages like C++, JavaScript does not require a main() method as an entry point. This is due to the fact that JavaScript is not a compiled language but an interpreted one. 



// - - - - - - - - - - 



# How C++ and Java are different from JavaScript: 


- C++ is a strictly typed and compiled language. It requires a main() method as an entry point and is designed for direct machine code execution.
  
- Java is both compiled and interpreted. Java source code is compiled into bytecode, which is then interpreted by the Java Virtual Machine (JVM). The JVM acts as a software-based interpreter, converting bytecode into machine code for execution.



*/




// # Console Output in JavaScript:

// Printing "Hello, World!!" on the console
console.log("Hello, World!!");

// A new line starts after each console.log() statement.




/*



// - - - - - - - - - - 



# Single-Threaded Nature of JavaScript:

--> JavaScript is inherently single-threaded, meaning it processes one task at a time in a single sequence. This is in contrast to C++ and Java, which support multithreading.



// - - - - - - - - - - 



# Multithreading and Cores in a PC:


- Multithreading involves executing multiple threads (independent sequences of instructions) concurrently.

- Cores in a PC represent the number of processing units capable of executing threads simultaneously.

- C++ and Java are considered multithreaded languages, enabling them to leverage multiple cores for parallel execution.



// - - - - - - - - - - 



# Challenges with Single-Threaded Nature:


- Single-threaded nature limits the concurrent processing capability of JavaScript.

- For scalable systems that require handling numerous tasks concurrently, a single-threaded approach may lead to performance bottlenecks.

- Scalability challenges arise as the application may struggle to efficiently utilize modern, multicore processors.



// - - - - - - - - - - 



# Cluster Module in Node.js:

- To address the scalability limitations of JavaScript, especially in a Node.js environment, the "Cluster Module" can be utilized.

- The Cluster Module allows for the creation of child processes, enabling parallel processing and better utilization of multiple cores.

- By using the Cluster Module, developers can enhance the scalability of Node.js applications and mitigate the impact of its single-threaded nature on performance.

Overall, while JavaScript's single-threaded nature poses challenges for scalability, the Cluster Module provides a means to harness the power of multicore systems and enhance the performance of JavaScript applications in a scalable manner.



*/




/*



# References Cited: 


* Harkirat Singh's 100xDevs Cohort-2 (0-100): 
https://harkirat.classx.co.in/ 


* ChatGPT: 
https://chat.openai.com/ 



*/