## Package

- package means aisa code jo kisi aur developer ne likha hai aur usse hmm apne code me usse kar paa rahe hai `npm.js` ki website se uss package ko install karke `npm i` command se usse package bolte hai.

---

## package.json

- `package.json` file ka keval usse hota hai voo ye batati hai kon kon se packages ko install kiya hai hamne apne system/project me.

---

## package-lock.json

- `package-lock.json` file hame ye batati hai ki hamare project me jitne bhi packages install hue hai unka poora structure maintain karke rakhti hai ye file aur isse file me hame koi bhi changes nhi karne hote hai.

---

## node_modules

- `node_modules` folder me hamare jitne bhi packages hai unka poora code iss folder me present hota hai aur isme ye bhi hota hai ki jo package hamne install kiya hai voo kisi aur package par depend karta hai ki nhi, agar karta hai too uska poora code bhi iss folder me present hota hai, varna agar voo package kisi aur dependencies par dependend hota hai too usska code bhi iss folder me present hota hai.

---

## port

- `port number` ka hmm usse karte hai voo hame batata hai ki hamara server kon se port par run karega

---

## Request and Response

- `req` ka matlab voo poora data joo frontend se backend ki taraf aa raha hai voo hmm `req` ki help se hii accept kar payenge aur koi second method nhi hai access karne ka.
- `res` ka matlab joo bhi data hame backend se frontend ki taraf hame send karna hai uske liye hmm `res` ka use karenge.

---

## API (Application programming interface)

- `api` is a set of rules or protocols that allows different software programs to communicate and exchange data and function with each other, means hame two or more applications ko communicate kiya jaa sakta hai.

--- 

#### Types of API by Architectural Style/Protocol

## REST (Representational State Transfer) API

- `REST API` means data is typically exchanged in formats like JSON or XML. In REST API methods are (GET, POST, PUT, DELETE). Means two applications ko kaise communicate karvana hai voo `REST API` batati hai.

## SOAP (Simple Object Access Protocol) API

- `SOAP API` means XML for message formatting and typically rely on HTTP or other protocols for message communication, they are known for their strong typing, security features and often used in enterprise environments.

## RPC (Remote Procedure Call) API

- `RPC API` means to allow a client to execute a function or procedure on a remote server as if it were a local call, example includes XML-RPC and JSON-RPC.

## GraphQL API

- `GraphQL API` means it's a query language for APIs and a runtime for fulfilling those queries with existing data, it allows clients to request exactly the data thay need, avoiding over-fetching or under-fetching of data.

## WebSocket API

- `WebSocket API` means unlike traditional HTTP requests, websockets APIs provide persistent, two-way communication channels between a client and a server, enabling real-time data exchange.

---

## HTTP Methods

# GET Method

- jab hame server se data fetch karvana ho tab `GET` method use karte hai.

## POST Method

- jab hame server par data send karna hoo tab ham `POST` method use karte hai.

## PATCH Method

- jab hame server par data already present hoo aur hame uss data ko update karna hoo tab ham `PATCH` method use karte hai.

## DELETE Method

- jab hame server par data delete karna hoo tab ham `DELETE` method use karte hai.

---