const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
  //  grant method is used to create a role
  // methods such as readAny, updateAny... are  action attributes/that define what actions each role can perform on a resource(profile)

  ac.grant("customer").readOwn("profile").updateOwn("profile");

  ac.grant("admin")
    // extend method allows a role to inherit all attributes defined on another role
    .extend("customer")
    .updateAny("profile")
    .deleteAny("profile");

  return ac;
})();
