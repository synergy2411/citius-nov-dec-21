# Repo Link - https://github.com/synergy2411/citius-nov-dec-21

# What is JavaScript?
- Dynamically typed language
- Client (Browser) and Server Side (Node Runtime Environment)
- Scripting Language 
- Single Threaded
- Asynchoronous | Non-blocking
- Supports Object Oriented (ES2015 / ES6+ features)
- Functions are first-class citizens (ES5)
- ECMA Specifications implementation
- Browser independent (ES5)
- Interpreted
- Event Driven Approach

# ES6+ Features
- Arrow Functions
- Spread/Rest 
- Destructuring
- Module
- Class & Inheritance
- Template Literals
- Block Scope
- Promises

# TypeScript - 2Days
# NodeJS - 5Days
# ExpresJS - 4Days

# Breaks
- Tea Break : 15Minutes (12:15 - 12:30)
- Lunch break : 60Minutes (1:30 - 2:30)
- Tea Break : 15Minutes (4:00 - 4:15)

# to install typescript compiler
> npm install -g typescript
> tsc -v
> tsc basics.ts
> tsc --init


TS -> JS -> Node / Browser

# JavaScript Types
- Primitive Type : String, Number, Boolean, Date
- Reference Type : Object, Array, Function

# TypeScript Types
- undefined
- void
- enum
- any
- unknown
- never
- null
- custom types - Class, Interface, Type Keyword

# to generate tsconfig.json
> tsc --init
> tsc --watch | -w

# TypeScript Code on Browser
> Finance Logger : Managing payments / receipts on UI

# TypeScript Code on Server

# ES6 - Arrow Function, Spread/Rest, Destructuring, Block Scope, Template Literals, Promises

Arrow Function -> {}
- Easier to write
- Don't have 'this' keyword
- Can't call with 'new' operator
- Can't be hoisted

Rest / Spread (...)
- Rest always comes in function parameter : create the collection from individual items
- Spread always comes with collection (Array/Object) : spreads the collection into individual item

Destructuring - Array/ Object : unpack the collection
- Nested Destructuring

Block-scope : restrict the scope of variable within nearest block
- let 
- const


- Classes
- Generics
- Decorators
- Module
- Namespace

# To-do App



useEffect() : to perform side-effects
useEffect(()=>{})
useEffect(()=>{}, [])
useEffect(()=>{}, [Deps])
useEffect(()=>{
    return () => {}
}, [])

class - componentDidMount, componentDidUpdate, componentWillUnmount



- relect-metadata : meta programming - 


# Modules vs Namespaces
- External Modules
- TS Compiler - separate file for each module
- import / export
- Can be loaded conditionally

- Internal Namespace
- TS Compiler - Single entry file (--outfile)
- Globally available (<reference path="" />)
- Can be nested
- Avoid global pollution


- tsc --outfile index.js moduleA.ts --module "amd"


Browser - ES2015 / ES6
Node - CommonJS Module (require/ module.exports)


- index.html <script src="" type="module">
- constant.namespace.ts
- util.namespace.ts <reference path = "constans.namespce.ts" />
- app.ts <reference path = "util.namespce.ts" />




# What is NodeJS?
- Server-side scripting 
- Server-side Runtime-Environment - NRE
- Compiled and Interpreted
- V8 Engine - Works with Machine language (C++) Chrome/ Chromium based browser
- Fast
- Single Threaded
- Asynchronous / Non-blocking
- Event-driven Approach
- Scalable App (Horizontal / vertical scaling)
- Real-time response
- Streams
- Node Package Manager (NPM)
- Distributed App
- REST APIs
- Web Server : Upload / Download Server
- Microservices
- Socket programming
- Web App


# Node Installer
- Node Runtime Environment
- Node Package Manager
- Native Module

# Common Native Module
- http
- fs
- http / https
- events
- stream
- path
- util
- os
- zlib


# Common External Module
- axios
- yargs
- chalk
- mongodb
- socket.io
- mongoose
- express
- body-parser


# to generate package.json
> npm init -y

- Download the project and 
- From project folder > npm install -> package.json -> dependecy section

# to restart the server on every file change
-> npm install nodemon -g

View Engines -> Jade, handlebars, ejs, vash