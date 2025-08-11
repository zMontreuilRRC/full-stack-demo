import { Term } from "@prisma/client";

export const termSeedData: Omit<Term, 'id'>[] = [
{
    title: 'API',
    definition: 'An API (Application Programming Interface) is a set of functions and protocols that allow communication between software components.',
    isFavourite: false
},
  {
      title: 'Asynchronous',
      definition: 'Asynchronous programming allows tasks to run separately from the main program flow, enabling non-blocking operations such as network requests.',
      isFavourite: false
  },
  {
      title: 'Callback',
      definition: 'A callback is a function passed into another function as an argument and executed after some operation completes.',
      isFavourite: false
  },
  {
      title: 'DOM',
      definition: 'The Document Object Model (DOM) is a programming interface for web documents, representing the structure of a page as a tree of objects.',
      isFavourite: false
  },
  {
      title: 'Event Loop',
      definition: 'The event loop handles asynchronous events and executes the appropriate callback functions in a non-blocking manner.',
      isFavourite: false
  },
  {
      title: 'Function',
      definition: 'A function is a reusable block of code designed to perform a particular task.',
      isFavourite: false
  },
  {
      title: 'Hoisting',
      definition: 'Hoisting is JavaScript\'s default behavior of moving declarations to the top of the current scope before code execution.',
      isFavourite: false
  },
  {
      title: 'Promise',
      definition: 'A Promise is an object representing the eventual completion or failure of an asynchronous operation.',
      isFavourite: false
  },
  {
      title: 'Closure',
      definition: 'A closure is a function that remembers the variables from its lexical scope even when the function is executed outside that scope.',
      isFavourite: false
  },
  {
      title: 'JSON',
      definition: 'JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.',
      isFavourite: false
  },
  {
      title: 'LocalStorage',
      definition: 'LocalStorage is a web storage API that allows websites to store data in the browser with no expiration time.',
      isFavourite: false
  },
  {
      title: 'Fetch API',
      definition: 'The Fetch API provides a modern interface for making HTTP requests in web browsers.',
      isFavourite: false
  },
  {
      title: 'HTTP',
      definition: 'HTTP (Hypertext Transfer Protocol) is the foundation of data communication for the web.',
      isFavourite: false
  },
  {
      title: 'CSS',
      definition: 'CSS (Cascading Style Sheets) is used to describe the presentation of a document written in HTML or XML.',
      isFavourite: false
  },
  {
      title: 'HTML',
      definition: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages.',
      isFavourite: false
  },
  {
      title: 'JavaScript',
      definition: 'JavaScript is a programming language that enables dynamic interactions on web pages.',
      isFavourite: false
  },
  {
      title: 'Module',
      definition: 'A module is a reusable piece of code that encapsulates related functions, variables, or classes.',
      isFavourite: false
  },
  {
      title: 'Node.js',
      definition: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine that allows JavaScript to be run on the server.',
      isFavourite: false
  },
  {
      title: 'TypeScript',
      definition: 'TypeScript is a strongly typed programming language that builds on JavaScript and adds static typing.',
      isFavourite: false
  },
  {
      title: 'Variable',
      definition: 'A variable is a named container for storing data values.',
      isFavourite: false
  },
  {
      title: 'Scope',
      definition: 'Scope refers to the accessibility of variables and functions in different parts of the code.',
      isFavourite: false
  },
  {
      title: 'Array',
      definition: 'An array is a data structure used to store multiple values in a single variable.',
      isFavourite: false
  },
  {
      title: 'Object',
      definition: 'An object is a collection of properties, where each property is defined as a key-value pair.',
      isFavourite: false
  },
  {
      title: 'NaN',
      definition: 'NaN (Not-a-Number) is a value representing a computation that does not yield a valid number.',
      isFavourite: false
  },
  {
      title: 'Event Listener',
      definition: 'An event listener is a procedure in JavaScript that waits for an event to occur and responds to it.',
      isFavourite: false
  },
  {
      title: 'ES6',
      definition: 'ES6 (ECMAScript 2015) is a major update to JavaScript that introduced new features like let/const, arrow functions, classes, and modules.',
      isFavourite: false
  },
  {
      title: 'Lexical Environment',
      definition: 'A lexical environment is a structure that holds identifier-variable mapping in JavaScript.',
      isFavourite: false
  },
  {
      title: 'Web API',
      definition: 'Web APIs are interfaces provided by browsers to interact with the browser and device hardware.',
      isFavourite: false
  },
  {
      title: 'BOM',
      definition: 'The Browser Object Model (BOM) allows interaction with the browser outside the content of the web page.',
      isFavourite: false
  },
  {
      title: 'Event Bubbling',
      definition: 'Event bubbling is a type of event propagation in the DOM where events propagate from the target element up to the root.',
      isFavourite: false
  }
]