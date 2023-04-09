## 1. What is JavaScript, and how does it differ from other programming languages?
 - Javascript is a scripting language that enables you to create a complex animations and features mainly on web pages. Javascript is interpreted by a browser, while most languages are compiled.
## 2. Can you explain how the event loop works in JavaScript?
 - So basically `EVENT LOOP` in JS works as a maintenance for different events and task. `EVENT LOOP` is checking for pending tasks or events and then adds it to the `CALL STACK`, which has all the tasks\events that need to be executed. `EVENT LOOP` is continuosly checking for new events or tasks. 
## 3. What are the data types in JavaScript?
 - String, Number, Boolean, Objects, Array Objects, Date objects, undefined, Null, BigInt(<64bit)
## 4. What is the difference between null and undefined?
 - `Null` means an empty value, `undefined` on the other hand means that the variable has been decrared, but the value is not assigned.
## 5. What is the difference between == and ===?
 - `==` compares the values, `===` compares the value and data types
## 6. What is the difference between primitive data types and objects in JavaScript?
 - Primitive data types are: `boolean`, `string`, `number`, `symbol`, `null`. In Objects you can store different primitive types of data, ex.: `const object = {number: 1, string: "string", bool: false}` etc
## 7. What is closure and how does it work in JavaScript?
 - A closure allows function to access multiple variables that are not within its own scope. It's used to create a function inside another function.
## 8. What is hoisting in JavaScript?
 - Hoisting is behavior when functions and variables are put on the top of their scopes, regadless of where they are declared in the code.
## 9. How do you understand the prototype-based model of objects in JavaScript?
- Each object or function has its prototype. Prototypes are used as a template for an object and they provide a set of methods and properties that can be used by a n object.
## 10. What is the use of the "this" keyword in JavaScript?
 - Keyword `this` refers to the parent object. There are different cases for `this` keyword. For example, when using `this` alone, it refers to the global object on our page. When using it inside the function, it also refers to the global object. When using in inside the event handler, it refers to the HTMl tag that it is used in. When using in the method, in refers to the object, etc.
## 11. What is class in JavaScript?
 - `Clas`s in javascript is a template for creating objects.
## 12. How do you implement inheritance in JavaScript?
 - By using ES6 class syntax or prototype-based model.
## 13. What are the differences between function declaration and function expression?
 - Function declaration is executed before any other code, function expression is executed when the interpeter reaches that line of code. Fun. expression require storing in a variable and does not require a name, while declaration needs to have a name and does not require to be stores in variable.
## 14. What is a promise in JavaScript and how does it work?
 - A `Promise` is an object representing the eventual completion or failure of an asynchronous operation.
## 15. What are the different ways to handle errors in JavaScript?
 - By using `try\catch` block, by manually console logging the errors in functions, by using throw statements, ex.: `throw new Error("error")`
## 16. What is asynchronous programming in JavaScript?
 - Asynchronous programming technique enables you to run tasks simultaneously, rather than waiting for them to run after one another.
## 17. How would you implement a debounce function in JavaScript?
```javascript
function resizeWindow() {
  console.log("Window resized!");
}
const debouncedResizeWindow = debounce(resizeWindow, 200);
window.addEventListener('resize', debouncedResizeWindow);
```
- So basically it calls the function only when user finished resizing the window. In other words, this function prevents from running every time the window gets resized, instead it only runs when the user finishes resizing the window.
## 18. What is the difference between "let" and "const" in JavaScript?
- `Let` can't be re-declared within its own block, but it can be updated. `Const` variable can't be re-decraed or updated within its own scope. `let` can be declared without initialization, `const` needs to be initialized during declaration.
## 19. What is a generator function in JavaScript, and how is it used?
 - `Generator Function` in JavaScript enables you to pause and continue the code execution whenever you want, until the next `yield`. e.: 
```javascript
function* generator() {
console.log("some code");
yield 100;
consol.log("more code")
}
```
## 20. How would you implement a map function in JavaScript?
- `map` is a built-in JS function for iterating over the arrays, here's how I would implement it: 
```javascript
const people = [{name: "John", age: 32}, {name: "Billie", age: 25}]
people.map(({name, age})=> console.log("name: " + name, "age: " + age))
```
## 21. How would you implement a forEach function in JavaScript?
```javascript
people.forEach((person) => console.log(person.age+1))
```
## 22. Can you explain what a higher-order function is in JavaScript?
- Higher-order function is a function that takes two or more arguments, one of which is function. Or if it returns a function as a return value. Example of a higher-order function:
```javascript
// regular function/wrapper
function func(x) {
return x + 1;
}

// high order function, it takes a function as an argument
function calcFunc(f, x) {
  f(x) + 10;
}

calcFunc(func, x)
```
## 23. How would you implement a filter function in JavaScript?
```javascript
// reference to the previos `people` array
 
people.filter((person)=> person.name !== "John")

// return a list of people whos name is not equal to `John` 

```
## 24. What is a REST API, and how is it used in JavaScript?
- `REST API` identifies Web resourses using URLS, and interactions with these resources are performed using HTML methods such as GET, POST, PUT, DELETE etc. Example of this API is `axios`.
```javascript
const fetchData = async() => {
 try {
 const {data} = axios(url, {
   headers: {
     Accept: application/json
    },
  })
 } catch(error) {
   console.log(error);
  }
}
```
## 25. What is a JSON, and how is it used in JavaScript?
- JavaScript Object Notation, used to store and exchange data, example of JSON file:
```
id:	"recJLWcHScdUtI3ny"
name: "Best of Salzburg & Vienna in 8 Days Tour"
info: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!"
image: "https://images2.imgbox.com/a2/b3/5H5WRLw7_o.jpeg"
price:	"2,695"
```
- And you can access it by using API such as `axios` or built-in `fetch`.
## 26. How would you implement a reduce function in JavaScript?
```javascript 

const tempArray = ["apple", "apple", "banana", "orange"];

tempArray.reduce((values, value) => {values[value] = (values[value] || 0) + 1; return values;}, {});

// by using reduce we can calculate how many are there items with the same name in the `tempArray` 

```
## 27. Can you explain the differences between cookies and localStorage in JavaScript?
- `Cookies` and `local storage` serve different purposes. In `local storage` you can store data up to 5MB, whereas one `cookie` can store a maximum of 4096 bytes. `Cookies` are mainly for reading server-side, while `local storage` is mainly for client-side. Furthermore, `local storage` does not sent back data to the server for every HTTP request, which reduces the amount of traffic on the web page.
## 28. How would you implement a currying function in JavaScript?
```javascript
// using ES6

const sendRequest => greet => name => message => `${greet} ${name}, ${message}`

sendRequest("Hello")("John")("Can you add me to your friend list?");

// output: Hello John, can you add me to your friend list?
```
## 29. What is the difference between the "call" and "apply" methods in JavaScript?
- These are very similar methods, except of `call` accepts arguments as a list and `apply` accepts arguments as an array.
## 30. What is the difference between a synchronous and an asynchronous function in JavaScript?
- Asynchronous function can be executed in the background, in other words it is not dependent on other functions, it can run simultaneously with other functions, whereas synchronous function is dependent on the function before it, so it will run only after the execution of the previous function.
## 31. How do you debug JavaScript code?
- By using `console.log()` or `debugger`, which tells the browser to stop executing the code.
## 32. How do you manipulate the DOM in JavaScript?
```javascript
// accesing DOM elements
getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector()

// changing elements' properties 
innerHTML, textContent, className, id, src, href, style

// modifying elements' content
innerHTML, textContent, appendChild()

// adding, removing elements 
createElement(), appendChild(), emoveChild(), remove()

// modifying attributes 
setAttribute(), getAttribute()

// responding to events

addEventListener()
```
## 33. How do you use the fetch API in JavaScript?
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Do something with the retrieved data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error('Error:', error);
  });

```
## 34. How do you use regular expressions in JavaScript?
```javascript 
// the best example is to use them for validating stuff 

// example #1
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?$/;
const url = 'https://www.example.com/path/to/page?query=string';
if (url.match(urlPattern)) {
  console.log('Valid URL');
} else {
  console.log('Invalid URL');
}

//example #2
const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const email = 'john@example.com';
if (email.match(emailPattern)) {
  console.log('Valid email address');
} else {
  console.log('Invalid email address');
}
```
## 35. Can you explain how JavaScript Web Workers work, and how they can be used to execute complex or long-running tasks in the background without blocking the main thread?
## 36. What are web sockets and how to use them?
## 37. Can you explain how the "spread" and "rest" operators work in JavaScript and how they can be used to manipulate arrays and objects?
## 38. How do you handle API versioning in your JavaScript applications?
## 39. Can you explain how the JavaScript Map, Set, and WeakMap data structures work, and what advantages they offer over traditional arrays and objects?
## 40. What do you know about programming patterns, what are the basic types of patterns?
## 41. What are the main examples of code smells?
## 42. How do you optimize your JavaScript code for performance?
## 43. Can you explain the difference between GET, POST, PUT, PATCH and DELETE requests in RESTful APIs?
## 44. How do you handle file uploads in JavaScript, and what are some best practices for handling large files?
## 45. How do you handle request headers in JavaScript, and what are some common headers that are used in HTTP requests?
## 46. What is the difference between a single-page application and a multi-page application in JavaScript?
## 47. What is SOLID principles?

