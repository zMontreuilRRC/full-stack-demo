import { Term } from "../types/term";

/*
 This array of Terms will serve as placeholder data while we don't have a 
 backend for our app.

 We'll export it to our App and share it to all pages as a context, so we can
 update our favourites.
*/

export const terms: Term[] = [
    {
        "id": 0,
        "title": "SEO (Search Engine Optimization)",
        "definition": "The process of making a website more visible in search results, also termed improving search rankings.",
        "isFavourite": false
    },
    {
        "id": 1,
        "title": "API (Application Programming Interface)",
        "definition": "A set of functions and protocols that allows the creation of applications that access features or data of an operating system, application, or service.",
        "isFavourite": true
    },
    {
        "id": 2,
        "title": "AJAX (Asynchronous JavaScript and XML)",
        "definition": "A method of building interactive applications by sending and retrieving data from a server asynchronously without interfering with the existing page.",
        "isFavourite": false
    },
    {
        "id": 3,
        "title": "DOM (Document Object Model)",
        "definition": "An API for HTML and XML documents that defines the logical structure of documents and the way they can be accessed and manipulated.",
        "isFavourite": true
    },
    {
        "id": 4,
        "title": "CSS (Cascading Style Sheets)",
        "definition": "A stylesheet language used to describe the presentation of a document written in HTML or XML.",
        "isFavourite": true
    },
    {
        "id": 5,
        "title": "HTML (HyperText Markup Language)",
        "definition": "The standard markup language for creating web pages and web applications.",
        "isFavourite": false
    },
    {
        "id": 6,
        "title": "JavaScript",
        "definition": "A programming language that enables dynamic content updates, interactive forms, and multimedia on web pages.",
        "isFavourite": false
    },
    {
        "id": 7,
        "title": "Node.js",
        "definition": "A JavaScript runtime built on Chrome's V8 JavaScript engine, allowing JavaScript to run server-side.",
        "isFavourite": false
    },
    {
        "id": 8,
        "title": "Promise",
        "definition": "An object representing the eventual completion or failure of an asynchronous operation.",
        "isFavourite": false
    },
    {
        "id": 9,
        "title": "HTTP (HyperText Transfer Protocol)",
        "definition": "The protocol used for transferring hypertext requests and information on the internet.",
        "isFavourite": false
    },
    {
        "id": 10,
        "title": "HTTPS (HyperText Transfer Protocol Secure)",
        "definition": "An extension of HTTP that uses encryption protocols to secure data transfer on the internet.",
        "isFavourite": false
    }
]