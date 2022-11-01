"use strict";

const events = require("./events.js");

require("./system.js");
require("./pilot.js");

const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");

setInterval(() => {
  let country = faker.address.country();
  let city = faker.address.city();
  let pilotName = faker.name.fullName();
  let id = uuidv4();

  const flightDetails = {
    flightID: id,
    airLine: "Royal Jordanian Airlines",
    pilot: pilotName,
    destination: `${city}, ${country}`,
  };

  console.log(`Manager: new flight with ID ${flightDetails.flightID} have been scheduled`);
  events.emit("new-flight", flightDetails);
}, 10000);

events.on("arrived", (flightDetails) => {
  console.log(`Manager: we’re greatly thankful for the amazing flight, ${flightDetails.pilot}`);
});
