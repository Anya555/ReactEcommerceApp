const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
  //  grant method is used to create a role
  // methods such as readAny, updateAny... are  action attributes,
  //that define what actions each role can perform on a resource(item)

  ac.grant("databaseManager")
    .createAny("item")
    .readAny("item")
    .updateAny("item")
    .deleteAny("item");

  return ac;
})();

//Myappp555 -password
