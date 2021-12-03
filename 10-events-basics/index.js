const EventEmitter = require("events").EventEmitter;

let emitter = new EventEmitter();


// Add the Listener with event -> 'newListener'
// Remove the Listener from Event -> 'removeListener'

emitter.on("newListener", (eventName, listenerFn) => {
    console.log(`${listenerFn.name} Listener Added ${eventName}`)
})

emitter.on("removeListener", (eventName, listenerFn) => {
    console.log(`${listenerFn.name} Listener removed ${eventName}`)
})


const handlerFn1 = () => {
    console.log("Foo Event fired")
    emitter.removeListener("foo", handlerFn2)
}
const handlerFn2 = () => console.log("Foo Event fired")

emitter.on("foo", handlerFn1)
emitter.on("foo", handlerFn2)

emitter.emit("foo")




// Listener Management
// const handlerFn1 = () => console.log("Handle 1")
// const handlerFn2 = () => console.log("Handle 2")

// emitter.on("bam", handlerFn1)
// emitter.on("bam", handlerFn2)

// console.log(emitter.listeners("bam"))

// emitter.emit("bam")










// Single Subscription
// emitter.once("bar", () =>{
//     console.log("Bar Event Handled")
// })

// // Emitted twice
// emitter.emit("bar")
// emitter.emit("bar")






// Multiple Subscription

// const handlerFn = (data, isHandled) => {
//     console.log("Foo Event Handler Function with message : ", data.msg)
//     console.log(isHandled)
// }

// emitter.on("foo", (data, isHandled) => {
//     console.log("Foo Event Fired with message : ", data.msg)
//     console.log(isHandled)
//     isHandled = false       // Immutable
//     data.msg = "Good Bye"       // mutable
//     emitter.removeListener("foo", handlerFn)
// })

// emitter.on("foo", handlerFn)

// emitter.emit("foo", {msg : "Hello World"}, true)
// emitter.emit("foo", {msg : "Hello Node"}, true)