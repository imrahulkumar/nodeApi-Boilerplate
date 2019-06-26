const user_route = require("./app/modules/user/routes/user.routes");

//All modules path and path-handler array
module.exports = [
  {
    path: "/api/user",
    handler: user_route
  }
];  