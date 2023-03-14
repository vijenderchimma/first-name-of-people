let peopleNames = require("../country/state/city/index");
let getFirstName = require("../utilities/utils/index");

function getPeopleInCity(peopleNames) {
  return getFirstName(peopleNames);
}
module.exports = getPeopleInCity;
