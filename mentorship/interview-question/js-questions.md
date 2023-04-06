## 1. What is JavaScript, and how does it differ from other programming languages?
#### - Javascript is a scripting language that enables you to create a complex animations and features mainly on web pages. Javascript is interpreted by a browser, while most languages are compiled.
## 2. Can you explain how the event loop works in JavaScript?
#### - So basically `EVENT LOOP` in JS works as a maintenance for different events and task. `EVENT LOOP` is checking for pending tasks or events and then adds it to the `CALL STACK`, which has all the tasks\events that need to be executed. `EVENT LOOP` is continuosly checking for new events or tasks. 
## 3. What are the data types in JavaScript?
#### - String, Number, Boolean, Objects, Array Objects, Date objects, undefined, Null, BigInt(<64bit)
## 4. What is the difference between null and undefined?
#### - `Null` means an empty value, `undefined` on the other hand means that the variable has been decrared, but the value is not assigned.
## 5. What is the difference between == and ===?
#### - `==` compares the values, `===` compares the value and data types
## 6. What is the difference between primitive data types and objects in JavaScript?
#### - Primitive data types are: `boolean`, `string`, `number`, `symbol`, `null`. In Objects you can store different primitive types of data, ex.: `const object = {number: 1, string: "string", bool: false}` etc
## 7. What is closure and how does it work in JavaScript?
#### - A closure allows function to access multiple variables that are not within its own scope. It's used to create a function inside another function.
## 8. What is hoisting in JavaScript?
#### - Hoisting is behavior when functions and variables are put on the top of their scopes, regadless of where they are declared in the code.
## 9. How do you understand the prototype-based model of objects in JavaScript?
#### - Each object or function has its prototype. Prototypes are used as a template for an object and they provide a set of methods and properties that can be used by a n object.
## 10. What is the use of the "this" keyword in JavaScript?
#### - Keyword `this` refers to the parent object. There are different cases for `this` keyword. For example, when using `this` alone, it refers to the global object on our page. When using it inside the function, it also refers to the global object. When using in inside the event handler, it refers to the HTMl tag that it is used in. When using in the method, in refers to the object, etc.
## 11. What is class in JavaScript?
#### - `Clas`s in javascript is a template for creating objects.
## 12. How do you implement inheritance in JavaScript?
#### - By using ES6 class syntax or prototype-based model.
## 13. What are the differences between function declaration and function expression?
#### - Function declaration is executed before any other code, function expression is executed when the interpeter reaches that line of code. Fun. expression require storing in a variable and does not require a name, while declaration needs to have a name and does not require to be stores in variable.
## 14. What is a promise in JavaScript and how does it work?
#### - A `Promise` is an object representing the eventual completion or failure of an asynchronous operation.
## 15. What are the different ways to handle errors in JavaScript?
#### - By using `try\catch` block, by manually console logging the errors in functions, by using throw statements, ex.: `throw new Error("error")`
## 16. What is asynchronous programming in JavaScript?
#### Asynchronous programming technique enables you to run tasks simultaneously, rather than waiting for them to run after one another.
## 17. How would you implement a debounce function in JavaScript?
 `
function resizeWindow() {
  console.log("Window resized!");
}
const debouncedResizeWindow = debounce(resizeWindow, 200);
window.addEventListener('resize', debouncedResizeWindow);`
#### So basically it calls the function only when user finished resizing the window. In other words, this function prevents from running every time the window gets resized, instead it only runs when the user finishes resizing the window.
## 18. What is the difference between "let" and "const" in JavaScript?
#### - `Let` can't be re-declared within its own block, but it can be updated. `Const` variable can't be re-decraed or updated within its own scope. `let` can be declared without initialization, `const` needs to be initialized during declaration.
19. What is a generator function in JavaScript, and how is it used?
20. How would you implement a map function in JavaScript?
21. How would you implement a forEach function in JavaScript?
22. Can you explain what a higher-order function is in JavaScript?
23. How would you implement a filter function in JavaScript?
24. What is a REST API, and how is it used in JavaScript?
25. What is a JSON, and how is it used in JavaScript?
26. How would you implement a reduce function in JavaScript?
27. Can you explain the differences between cookies and localStorage in JavaScript?
28. How would you implement a currying function in JavaScript?
29. What is the difference between the "call" and "apply" methods in JavaScript?
30. What is the difference between a synchronous and an asynchronous function in JavaScript?
31. How do you debug JavaScript code?
32. How do you manipulate the DOM in JavaScript?
33. How do you use the fetch API in JavaScript?
34. How do you use regular expressions in JavaScript?
35. Can you explain how JavaScript Web Workers work, and how they can be used to execute complex or long-running tasks in the background without blocking the main thread?
36. What are web sockets and how to use them?
37. Can you explain how the "spread" and "rest" operators work in JavaScript and how they can be used to manipulate arrays and objects?
38. How do you handle API versioning in your JavaScript applications?
39. Can you explain how the JavaScript Map, Set, and WeakMap data structures work, and what advantages they offer over traditional arrays and objects?
40. What do you know about programming patterns, what are the basic types of patterns?
41. What are the main examples of code smells?
42. How do you optimize your JavaScript code for performance?
43. Can you explain the difference between GET, POST, PUT, PATCH and DELETE requests in RESTful APIs?
44. How do you handle file uploads in JavaScript, and what are some best practices for handling large files?
45. How do you handle request headers in JavaScript, and what are some common headers that are used in HTTP requests?
46. What is the difference between a single-page application and a multi-page application in JavaScript?
47. What is SOLID principles?

