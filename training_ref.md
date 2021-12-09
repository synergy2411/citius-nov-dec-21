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


# Mapbox API
https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3luZXJneTI0MTEiLCJhIjoiY2p4NXc0cm53MDZoODQwbHFuNzdzMzV5NCJ9.DKIDo6bcG51yLXf2DmlYcQ

# LocationIQ API
https://us1.locationiq.com/v1/search.php?key=pk.8194a80fd1a2983261c4e10837d8a228&q=delhi%20india&format=json


# Forecast Server API
https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/37.8267,-122.4233




- File System Module
- Middleware
- Global Variables (console, process, __dirname, __filename, timer, buffer)
- npm commands
- Events System
- Streams (Readable, Writable, Transform, Duplex)



Download Server -> Server (.mp3 / image ) to Client 
Upload Server -> Client (images/ videos ) to Server (Save on local storage)


# Node Installer
- Node Native Modules
- Node Runtime Environment (NRE) - REPL
- Node Package Manager (NPM)
: npm init
: npm install
: npm uninstall / npm rm 
: npm outdated
: npm update : update to maximum minor version
: npm ls [-g --depth 0]: list down all dependencies
: npm config list --json
: npm config get <configName>
: npm config set <configNameWithValue>
: npm adduser
: npm publish
: npm unpublish

# Semantic Versioning - X.Y.Z (non-negative integers)
- X : Major -> add new feature/functionality which is NOT backward compatible
- Y : Minor -> add new feature/functionality which is backward compatible
- Z : Patch -> bug fixes code which is backward compatible

^3.10.1 : Comfortable with all minor version
~3.10.2 : Comfortable with all patch version

> npm install chalk@4.1.0
> npm outdated
> npm update
> npm rm chalk

> npm install chalk@"~3.9.0"
> npm outdated
> npm update
> npm rm chalk





- TypeScript integration
    : typescript > TS -> JS
    : @types/node > provides type definition for Node API
    : ts-node
    : nodemon : ts
- Project structure (boilerplate)
- Socket Programming (socket.io) (Duplex)

> npx tsc --init
> npm install colors
> npm install @types/colors -D


- HTTPS
- Transform Stream
- Express
: Creating endpoints
: URL : Route and Query Parameters
: POC


# Asymmetric encyption
- Public key : available to everyone
- Private key : available on your server only


# Generate SSL Key & Certificate
openssl genrsa 1024 > key.pem
openssl req -x509 -new -key key.pem > cert.pem

http://localhost:9090 > https://localhost:9090





- MongoDB
- MongoDB Shell / MongoDB Driver
- Integrate MongoDB with Node/Express
- Driver API
- POC


- MongoD Executable
- MongoDB as a Window service

# Mongo Atlas SRV

username = citius
password = 0LXwebyFsFLhDmt2
mongodb+srv://citius:0LXwebyFsFLhDmt2@cluster0.e9xsq.mongodb.net/citius-db?retryWrites=true&w=majority


# Mongo Client
- Mongo Shell (CUI)
- MongoDB Driver > npm install mongodb




- Mongoose Library : ORM with MongoDB (Schema, Validation, Hooks)
- JWT : JSON Web Token - (Auth) - sign, verify

- File Upload - multer : Multipart Form Data
- Content Negotation - 
- View Engine : Dynamic template
- Error Handling : 

- MERN Stack App