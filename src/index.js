"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import stylesheets
require("./style.css");
class Clock {
    /**
     * Called when "new" is invoked, you'll pass your target element here.
     * @param element Target element to update
     */
    constructor(element) {
        this.el = element;
        // Immediately kick off a setInterval to this objects "run" method
        setInterval(() => this.run(), 1000);
    }
    /**
    * This method is invoked every ~1000ms
     */
    run() {
        var time = new Date();
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var clockStr = minutes + ' : ' + seconds;
        // Update this class' "el" variable as before.
        this.el.textContent = clockStr;
        console.log('clockStr:' + clockStr);
    }
}
// Create a new instance of Clock, passing in your target DOM element.
const clock = new Clock(document.getElementById('clock'));
