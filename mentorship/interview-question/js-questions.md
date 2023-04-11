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
- `JavaScript Web Workers` are a feature introduced in HTML5 that allow you to execute JavaScript code in a separate thread from the main thread. It allows you to run heavy tasks and calculations in the background without affecting the overall page performance.
## 36. What are web sockets and how to use them?
- `WebSockets` are a technology that allows for real-time communication between a web browser and a server. 

Example:

```javascript
// Create a new web socket on the port 3000. Server side.

const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', socket => {
  console.log('WebSocket connection opened');

  socket.on('message', message => {
    console.log('Received message from client:', message);
    socket.send('Hello, client!');
  });


// Usege of a web socket on the client side

const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', event => {
  console.log('WebSocket connection opened');
  
  socket.send('Hello, server!');
});
 
```
## 37. Can you explain how the "spread" and "rest" operators work in JavaScript and how they can be used to manipulate arrays and objects?
- With the `spread` operator you can create a new object by using the elements of an old object. Whereas `rest` operator, as the name says, can be used to collect all or the rest of the parameters. It is commonly used in functions. Examples:
```javascript
// Spread operator in action
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

// Rest operator in action 
const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

```
## 38. How do you handle API versioning in your JavaScript applications?
- `URL versioning`. You can include the API version in the URL path, ex.: https://mysite.com/api/v1
- `Query versioning`. Similar to URL versioning, but using the quote, ex.: https://mysite.com/ap?version=1
- `Header versioning`. In header versioning, the client specifies the API version they want to use by including a version header in their HTTP request, ex.: 
```javascript
GET /api/posts HTTP/1.1
Host: example.com
Version: 1
```
## 39. Can you explain how the JavaScript Map, Set, and WeakMap data structures work, and what advantages they offer over traditional arrays and objects?
- `Map`. A collection of key-value pairs where keys and values can be of any type. 
```javascript
let map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

console.log(map.get('key2')); // Output: value2
console.log(map.size); // Output: 3

map.delete('key3');
console.log(map.size); // Output: 2

```
- `Set`. A collection of unique values where values can be of any type. 
```javascript
let set = new Set();
set.add('value1');
set.add('value2');
set.add('value3');

console.log(set.has('value2')); // Output: true
console.log(set.size); // Output: 3

set.delete('value3');
console.log(set.size); // Output: 2

```
- `WeakMap`. A collection of key-value pairs where keys can be objects and values can be of any type. 
```javascript
let weakMap = new WeakMap();
let obj = {};

weakMap.set(obj, 'value1');
console.log(weakMap.get(obj)); // Output: value1

obj = null; // The reference to the object is removed

// There are no other references to the object, so it can be garbage collected
// The value associated with the object is also removed from the WeakMap

```

The advantages of using Map, Set, and WeakMap:

- `Efficiency`: Map, Set, and WeakMap data structures can be more efficient than traditional arrays and objects for certain use cases. For example, they can be faster for searching, adding, and removing elements.
- `Flexibility`: Map, Set, and WeakMap data structures are more flexible than traditional arrays and objects because they can store any type of data as keys and values, and they can be used to represent more complex data structures.
- `Uniqueness`: Set and Map data structures ensure that their elements are unique, which can be useful for preventing duplicate entries.
- `arbage collection`: WeakMap data structures are useful for storing private data associated with an object because they allow the object to be garbage collected when there are no other references to it. This can help prevent memory leaks in your code.

## 40. What do you know about programming patterns, what are the basic types of patterns?
- `Creational patterns`. These patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.
- `Structural patterns`. These patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.
- `Behavioral patterns`. These patterns are concerned with algorithms and the assignment of responsibilities between objects.
## 41. What are the main examples of code smells?
- Long methods, Duplicated code, Comments, Large classes, Dead code, Data clumps. Here are few examples: 
```javascript
// Long methods 
function calculateTotalCost() {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        total += item.price * item.quantity;
        if (item.promoCode) {
            total -= item.price * item.quantity * 0.1;
        }
    }
    if (total > 100) {
        total -= total * 0.05;
    }
    return total;
}
// This method is doing too many things at once, which makes it hard to read and maintain. It could be split up into smaller methods that each handle a specific  task, such as calculating the base cost, applying discounts, and calculating the final total.

// Duplicate code
function calculateCircleArea(radius) {
    const pi = 3.14;
    return pi * radius * radius;
}

function calculateCircleCircumference(radius) {
    const pi = 3.14;
    return 2 * pi * radius;
}
// The `pi` constant is repeated in both methods, which is unnecessary duplication. It could be defined once at the top of the file or in a separate utility function that can be reused throughout the codebase.

// Data clumps
function createUser(firstName, lastName, email, password, phoneNumber, address) {
    // ...
}
// This function has too many parameters that are all related to the same entity (in this case, a user). A better approach would be to group these parameters together into a single object or class, such as a User object that has properties for each of these fields. This would make the code more readable and easier to maintain.

```
## 42. How do you optimize your JavaScript code for performance?
- Use cache.
- Remove unused JavaScript code. It heavily load the page so it's better to remove such code.
- Avoid using too much memory. 
## 43. Can you explain the difference between GET, POST, PUT, PATCH and DELETE requests in RESTful APIs?
- `GET`. Used to get data from the server without modifying it.
- `POST`. Used to push new data to the server.
- `PUT`. Used to replace the existing resourse with a new one. Should be used to replace the entire resource.
- `PATCH`. Used to replace the existing resource partially. Should be used to replace only the specific part of a resource, for ex.: user's mail or phone number.
- `DELETE`. Used to delete the resource.
## 44. How do you handle file uploads in JavaScript, and what are some best practices for handling large files?
- Here's an example of handling file uploads:
```javascript
import React, { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);
    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        console.log('Upload successful!');
      })
      .catch((error) => {
        console.log('Upload error: ' + error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
```

When it comes to handling large files, there are a few best practices to keep in mind:

- `Chunking`: Rather than sending the entire file in a single request, you can break the file into smaller chunks and send them one at a time. This can help to prevent timeouts and improve the overall reliability of the upload.
- `Progress updates`: Provide feedback to the user about the progress of the upload. You can use the progress event to track the upload progress and update a progress bar or display a message.
- `Server-side validation`: Before processing the file, make sure to validate it on the server-side to ensure that it meets any requirements (e.g. file type, size, etc.). This can help to prevent errors and ensure that the upload is successful.
- `Compression`: Depending on the type of file you're uploading, it may be possible to compress it before sending it to the server. This can help to reduce the upload time and make the process more efficient.

## 45. How do you handle request headers in JavaScript, and what are some common headers that are used in HTTP requests?
- You can handle the headers in JavaScript by using `headers` object, which is built-in in the fetch API. 
Example: 
```javascript
const headers = new Headers();

const data = { name: 'John', age: 30 };
const options = {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json'
},
  body: JSON.stringify(data),
};
fetch('https://api.example.com/users', options)
```
Some common headers that are used in HTTP requests include:

- `Accept`: Specifies the MIME types that the client is willing to accept in the response.
- `Content-Type`: Specifies the MIME type of the request body.
- `Authorization`: Specifies the authentication credentials for the request.
- `User-Agent`: Specifies information about the client making the request, such as the browser type and version.
- `Referer`: Specifies the URL of the page that linked to the current page.
- `Cookie`: Specifies any cookies that should be sent with the request.

## 46. What is the difference between a single-page application and a multi-page application in JavaScript?
- A Single Page Application is where the server sends what you need with each click, and the browser renders that information without the need to reload the page again. Whereas in the case of a multi-page application every change requests rendering a new page from the server in the browser.
## 47. What is SOLID principles?
It is an acronym for 5 principles: 
- `Single Responsibility Principle (SRP)`: Each class or function should only have one job to do, and should not do anything else. This makes code easier to understand and change.
- `Open/Closed Principle (OCP)`: Software components should be designed to allow new features to be added by extending them, rather than by changing the existing code. This reduces the risk of introducing bugs and makes code more reusable.
- `Liskov Substitution Principle (LSP)`: If a program is using a class or function from a library, it should be able to use any subclass or implementation of that class or function without any issues or unexpected behavior. This helps to ensure that code is modular and that changes to one part of the system do not break other parts.
- `Interface Segregation Principle (ISP)`: Interfaces should be small and focused, and should only expose the methods that are relevant to the client code that uses them. This helps to avoid bloated interfaces that are hard to use and maintain.
- `Dependency Inversion Principle (DIP)`: Code should depend on abstractions, not concrete implementations. This allows code to be more flexible and adaptable to changes in requirements, and makes it easier to test and reuse.

