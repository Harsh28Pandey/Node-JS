//* Node.js Interview Questions & Answers

//? What is node.js?
//todo Node.js is a runtime environment built on chrome's v8 javascript engine that allows you to run javascript code outside the browser, often used to build scalable network applications.

//? What are the advantages of using node.js?
//todo 1 - Asynchronous and event-driven.
//todo 2 - Single-threaded but handles multiple requests.
//todo 3 - High performance due to v8 engine.
//todo 4 - Large ecosystem with npm package.

//? What is the difference between node.js and javascript?
//todo 1 - Javascript: Programming labguage that runs in browsers.
//todo 2 - Node.js: Runtime environment for executing javascript outside browsers.

//? What are callbacks in Node.js?
//todo Callbacks are the functions passes ad arguments to other functions, executed after an asynchronous operations is completed.

//? What is event loop in node.js?
//todo The event loop is a mechanism that allows node.js to perform non-blocking I/O operations by offloading opeartions to the system kernel whenever possible.

//? What is the difference between setImmediate() and process.nextTick()?
//todo 1 - process.nextTick(): Executes immediately after the current opeartions completes.
//todo 2 - setImmediate(): Executes in the next iteration of the next loop.

//? What is a Stream in node.js?
//todo Streams are objects that enables reading/writing data piece (chunks) instead of all at once. Types: Readable, Writable, Duplex, Transform.

//? What are node.js modules?
//todo Modules are the reusable blocks of code that can be imported/exported. Node.js supports CommonJS (require) and ES module (import).

//? What is middleware in node.js?
//todo Middleware is a function that has access to request objects and can modify them before passing control to the next middleware.

//? What are global objects in node.js?
//todo Some global objects: __dirname, __filename, process, Buffer, console.

//? What is the difference between fs.readFile and fs.createReadStream?
//todo 1 - fs.readFile: Reads the whole file into memory before processing.
//todo 2 - fs.createReadStream: Reads data in chunks (streaming).

//? How does node.js handle child processes?
//todo Using the child_process module (exec, spawn, fork) to run external commands or scripts.

//? What is the clustering in node.js?
//todo Clustering allows node.js to utilize multiple CPU cores by creating worker processes.

//? Explain package.json file?
//todo package.json contains project metadata (name,version,dependencies,scripts) and is essential for managing a node.js project.

//? What is the difference between npm and npx?
//todo 1 - npm: Package mamager for installing and managing dependencies.
//todo 2 - npx: Tool to execute binaries from npm packages without installing them globally.

//! -----------------------------------------------------------------------------------------

//* Express.js Interview Questions & Answers.

//? What is express.js?
//todo Express.js is a fast, unopinionated, and web framework for node.js, used for building APIs and web applications.

//? What are the features of Express.js?
//todo 1 - Middleware support
//todo 2 - Routing system
//todo 3 - Template engines
//todo 4 - HTTP helpers
//todo 5 - Easy integration with databases

//? What is middleware in express.js?
//todo Middleware functions are functions that have access to req, res, and next. They can execute code, modify, requests/responses, and end or continue the request-response cycle.

//? How does routing work in express.js?
//todo Routing refers to how an application's endpoints respond to client requests using methods like app.get(), app.post(), etc.

//? What is the difference between app.use() and app.get()?
//todo 1 - app.use(): Mounts middleware at the specified path.
//todo 2 - app.get(): Handles GET requests for a specified route.

//? How do you handle error in express.js?
//todo By creating error-handling middlewares with four arguments (err, req, res, next).

//? What is the difference between res.send(), res.json() and res.send()?
//todo 1 - res.send(): Sends response (string, object, buffer).
//todo 2 - res.json(): Send JSON response.
//todo 3 - res.end(): Ends response without any data.

//? How do you implement static files in express?
//todo Using app.use(express.static('public')) to serve static files like CSS, JS and images.

//? What is the difference between app.locals and res.locals?
//todo 1 - app.locals: Variables avaliable throughout the app.
//todo 2 - res.locals: Variables scoped to a single response.

//? How to enables CORS in express?
//todo Using cors middleware:
// const cors = require("cors")
// application.use(cors())

//? What are query parameters and routes parameters in express?
//todo 1 - Query parameters: /users?id=1 -> req.query.id
//todo 2 - Route parameters: /users/:id -> req.params.id

//? How do you structure on express.js project?
// todo Common structre:
//todo 1 - routes/ -> route definitions
//todo 2 - controllers/ -> request handling logic
//todo 3 - models/ -> database models
//todo 4 - middlewares/ -> custom middleware
//todo 5 - server.js -> entry point

//? What is body-parser in express?
//todo Body-parser is middleware that parses incomming request bodies (JSON, URL-encoded) before handlers process them.

//? How do you handle 404 errors in express?
//todo By adding a middleware at the end:
// app.use((req, res) => {
//     res.status(404).send("Page not found")
// })

//? What is the difference between express.js and node.js?
//todo 1 - Node.js: Runtime environment for executing javascript.
//todo 2 - Express.js: Web framework built on Node.js to simplify server developments.