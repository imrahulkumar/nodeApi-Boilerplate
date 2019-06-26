let express = require('express');
let router = express.Router();
const controller = require("../../user/controllers/user.controller");
const { wrapAsync } = require("../../../helpers/router.helper");

router.get("/register", wrapAsync(controller.user_register));

module.exports = router;
