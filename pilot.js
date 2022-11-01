"use strict";

const events = require("./events.js");

require("./system.js");
require("./pilot.js");

events.on("new-flight", (flightDetails) => {
  setTimeout(() => {
    console.log(`Pilot: flight with ID ${flightDetails.flightID} took-off`);
    events.emit("take-off", flightDetails);
  }, 4000);

  setTimeout(() => {
    console.log(`Pilot: flight with ID ${flightDetails.flightID} arrived`);
    events.emit("arrived", flightDetails);
  }, 7000);
});
