const jwt = require("jsonwebtoken");

// For generating jwt auth token
exports.generateAuthToken = user => {
    return new Promise((resolve, reject) => {
        let token = jwt.sign({ _id: user._id.toString() }, process.env.secret_token).toString();
        resolve(token);
    });
};