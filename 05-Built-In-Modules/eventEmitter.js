const EventEmitter = require("events")

const event = new EventEmitter()

event.on("greet", (name, age) => {
    console.log(`Hello ${name}, you are ${age} years old`)
})
event.emit("greet", "Alice", 30)

// once method
event.once("onceEmitter", () => {
    console.log("This event will be triggered only once")
})
event.emit("onceEmitter")
event.emit("onceEmitter") // This will not trigger the event again

// removeListener method
const callbackEvent=(name,age)=>{
    console.log(`Hello ${name}, you are ${age} years old`)
}
event.on("removeListener",callbackEvent)
event.emit("removeListener","Bob",25)
event.removeListener("removeListener",callbackEvent)