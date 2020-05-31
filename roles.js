const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
  //  grant method is used to create a role
  // methods such as readAny, updateAny... are  action attributes,
  //that define what actions each role can perform on a resource(item)

  ac.grant("admin").createAny("item").updateAny("item").deleteAny("item");

  return ac;
})();
