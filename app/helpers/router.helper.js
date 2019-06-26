const { errorHandler } = require("../helpers/errorHandling.helper");

exports.wrapAsync = fn => {
    return (req, res) => {
        return fn(req, res)
            .then(r => {
                res.status(200).send(r);
            })
            .catch(err => {
                const response = errorHandler(err);
                res.status(response.status).send(response);
            });
    };
};
