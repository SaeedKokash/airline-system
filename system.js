'use strict';

const events = require("./events.js");

require("./system.js");
require("./pilot.js");

events.on("new-flight", (flightDetails) => {
    console.log( `Flight {
        event: 'new-flight',
        time: ${new Date().toISOString()},
        Details: {
            flightID: ${flightDetails.flightID},
            airLine: ${flightDetails.airLine},
            pilot: ${flightDetails.pilot},
            destination: ${flightDetails.destination}
        }
    }`);
});

events.on("take-off", (flightDetails) => {
    console.log( `Flight {
        event: 'took-off',
        time: ${new Date().toISOString()},
        Details: {
            flightID: ${flightDetails.flightID},
            airLine: ${flightDetails.airLine},
            pilot: ${flightDetails.pilot},
            destination: ${flightDetails.destination}
        }
    }`);
});

events.on("arrived", (flightDetails) => {
    console.log( `Flight {
        event: 'arrived',
        time: ${new Date().toISOString()},
        Details: {
            flightID: ${flightDetails.flightID},
            airLine: ${flightDetails.airLine},
            pilot: ${flightDetails.pilot},
            destination: ${flightDetails.destination}
        }
    }`);
});