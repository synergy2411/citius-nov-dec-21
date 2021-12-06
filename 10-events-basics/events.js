let EventEmitter = require("events").EventEmitter;
let emitter = new EventEmitter();
let emitter1 = new EventEmitter();


// PubSub
// Raise/trigger/emit/produce the event - emit("") : Publish

// Subscribe the event to listener function - on(eventName, listenerFn) : Subscribe

const handlerFn1 = (data) => {
    console.log("Triggered : ", data.message)
}

emitter.on("FOO", handlerFn1)
emitter.on("BAR", () => {})

emitter.emit("FOO", {message : "SUCCESS"})
emitter.emit("BAR")


emitter1.emit("BAM")