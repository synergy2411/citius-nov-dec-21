let EventEmitter = require("events").EventEmitter;
let emitter = new EventEmitter();


// PubSub
// Raise/trigger/emit/produce the event - emit("") : Publish

// Subscribe the event to listener function - on(eventName, listenerFn) : Subscribe

const handlerFn1 = (data) => {
    console.log("Triggered : ", data.message)
}

emitter.on("FOO", handlerFn1)

emitter.emit("FOO", {message : "SUCCESS"})
