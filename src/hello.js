var address = require("./address")

console.log("start...");

address.printAddress();

var event = require("events");

let handle = function handleSomle() {
  console.log("hello world");
};


let emitter = new event.EventEmitter();

emitter.on("hello", handle);

setTimeout(() => {
  emitter.emit("hello");
  // emitter.removeListener("hello", handle);
  console.log(__filename);
  console.log(__dirname);
  console.trace();
}, 1000);

console.log(emitter.listenerCount("hello"));

// emitter.emit("hello");



console.log("complete...");