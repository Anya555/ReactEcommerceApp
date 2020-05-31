const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
  //  grant method is used to create a role
  // methods such as readAny, updateAny... are  action attributes,
  //that define what actions each role can perform on a resource(item)

  ac.grant("admin").create("item").read("item").update("item").delete("item");

  return ac;
})();
