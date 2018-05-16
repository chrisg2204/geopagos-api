'use strict';

/**
 * Clase Utilitaria ResponseUtil.
 * @class ResponseUtil
 * @module utils
 */
class ResponseUtil {

    constructor() {}

    /**
     * Centraliza el manejo de respuestas en el api.
     * @method sendResponse
     * @param res {Object}
     * @param status {integer}
     * @param data {Object}
     * @param success {Object}
     */
    sendResponse(res, status, data, success) {
        res.status(status).send({
            code: status,
            data: typeof data != 'undefined' ? data : null,
            success: typeof success != 'undefined' ? success : null
        });
    }

}

module.exports = new ResponseUtil();