'use strict';

/**
 * Habilita soporte CORS.
 * @module middleware
 * @name EnableCrossDomain
 * @type {Object}
 */
module.exports = function(env) {
    return (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");

        if ("OPTIONS" == req.method) {
            res.status(200).send("Ok");
        } else {
            next();
        }
    };
};