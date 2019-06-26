const {
    registration,
    login,
} = require("../business/user.business");

exports.user_register = async req => await registration(req);

exports.user_login = async req => await login(req.body);
