'use strict';

// Config
const appConfig = require('./config/App');
// Utils
const response = require('./utils/ResponseUtil');
// Controllers
const controllers = require('./controllers/index');

/**
 * Objeto donde se listan las rutas disponibles,
 * junto a sus respectivos controladores.
 * @name routes
 * @type {Object}
 */
module.exports = (express) => {
    let router = express.Router();

    /**
     * @apiDefine CustomContentType
     * @apiHeader {String="application/json"} Content-Type
     */

    /**
     * @apiDefine successResponse
     * @apiSuccess {Integer} code     Código HTTP.
     * @apiSuccess {Object=null} error     Objeto de errores.
     * @apiSuccess {Object} data     Data de respuesta.
     */

    /**
     * @apiDefine errorResponse
     * @apiError {Integer} code     Código HTTP.
     * @apiError {Object=null} data     Data de respuesta.
     * @apiError {Object} error     objeto de errores.
     */

    /**
     * @apiIgnore Not necesary
     * @api {GET} /
     * @apiVersion 0.0.1
     * @apiName TestRoute
     * @apiGroup Test
     */
    router.get('/', (req, res) => {
        response.sendResponse(res, 200, 'App listening on port: ' + appConfig.API_PORT, true);
    });

    /**
    * @api {POST} /user/add agrega un usuario
    * @apiUse CustomContentType
    * @apiVersion 1.0.0
    * @apiName add
    * @apiGroup User
    * @apiUse successResponse
    * @apiUse errorResponse
    *
    * @apiParam {String} email email.
    * @apiParam {String} fistname  nombre.
    * @apiParam {String} lastname  apellido.
    * @apiParam {String} address  direccion.
    *
    * @apiSuccess {Object} data     Datos de usuario.
    *
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *        "code": 200,
    *        "data": "User Created",
    *        "success": true
    *     }
    */
    router.post('/user/add', (req, res) => {
        const userController = controllers.UserController;
        userController.add(req, res);
    })

    /**
    * @api {POST} /user/approve aprueba un usuario
    * @apiUse CustomContentType
    * @apiVersion 1.0.0
    * @apiName approve
    * @apiGroup User
    * @apiUse successResponse
    * @apiUse errorResponse
    *
    * @apiParam {String} email email del usuario.
    *
    * @apiSuccess {Object} data     Datos de usuario.
    *
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *        "code": 200,
    *        "data": "User approved",
    *        "success": true
    *     }
    */
    router.post('/user/approve', (req, res) => {
        const userController = controllers.UserController;
        userController.approve(req, res);
    });

    /**
    * @api {PUT} /user/update actualiza un usuario
    * @apiUse CustomContentType
    * @apiVersion 1.0.0
    * @apiName update
    * @apiGroup User
    * @apiUse successResponse
    * @apiUse errorResponse
    *
    * @apiParam {String} email email del usuario.
    * @apiParam {String} fistname nuevo nombre.
    * @apiParam {String} lastname nuevo apellido.
    * @apiParam {String} address nueva direccion.
    *
    * @apiSuccess {Object} data     Datos de usuario.
    *
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *        "code": 200,
    *        "data": "User updated",
    *        "success": true
    *     }
    */
    router.put('/user/update', (req, res) => {
        const userController = controllers.UserController;
        userController.update(req, res);
    });

    /**
    * @api {DELETE} /user/disable desactiva un usuario
    * @apiUse CustomContentType
    * @apiVersion 1.0.0
    * @apiName disable
    * @apiGroup User
    * @apiUse successResponse
    * @apiUse errorResponse
    *
    * @apiParam {String} email email del usuario.
    *
    * @apiSuccess {Object} data     Datos de usuario.
    *
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *        "code": 200,
    *        "data": "User disabled",
    *        "success": true
    *     }
    */
    router.delete('/user/disable', (req, res) => {
        const userController = controllers.UserController;
        userController.disable(req, res);
    });

    /**
    * @api {POST} /user/sale genera una venta
    * @apiUse CustomContentType
    * @apiVersion 1.0.0
    * @apiName makeSale
    * @apiGroup Sales
    * @apiUse successResponse
    * @apiUse errorResponse
    *
    * @apiParam {String} email email del usuario.
    * @apiParam {String} amount monto.
    *
    * @apiSuccess {Object} data     Datos de la venta.
    *
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *        "code": 200,
    *        "data": "Sale Created",
    *        "success": true
    *     }
    */
    router.post('/user/sale', (req, res) => {
        const saleController = controllers.SaleController;
        saleController.makeSale(req, res);
    });

    /**
    * @api {DELETE} /user/sale cancela una venta
    * @apiUse CustomContentType
    * @apiVersion 1.0.0
    * @apiName cancelSale
    * @apiGroup Sales
    * @apiUse successResponse
    * @apiUse errorResponse
    *
    * @apiParam {String} uuid Identificador unico de la venta.
    *
    * @apiSuccess {Object} data     Datos de la venta.
    *
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *        "code": 200,
    *        "data": "Sale disabled",
    *        "success": true
    *     }
    */
    router.delete('/user/sale', (req, res) => {
        const saleController = controllers.SaleController;
        saleController.cancelSale(req, res);
    });

    /**
    * @api {GET} /user/sale Lista las ventas por usuario
    * @apiUse CustomContentType
    * @apiVersion 1.0.0
    * @apiName findUserRelationship
    * @apiGroup Sales
    * @apiUse successResponse
    * @apiUse errorResponse
    *
    * @apiParam {String} email Email del usuario a consultar (queryParam).
    *
    * @apiSuccess {Object} data     Datos de usuario y ventas.
    *
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *        "code": 200,
    *            "data": [
    *                {
    *                    "UsersSalesId": 1,
    *                    "userId": 1,
    *                    "saleId": 10,
    *                    "sale": {
    *                        "saleId": 10,
    *                        "uuid": "d8f67bd0-586a-11e8-be68-2534d4e37682",
    *                        "userEmail": "christiang15@hotmail.com",
    *                        "saleDate": "2018-05-15T17:07:31.913Z",
    *                        "saleAmount": "100",
    *                        "saleStatus": false
    *                    }
    *                },
    *                {
    *                    "UsersSalesId": 2,
    *                    "userId": 1,
    *                    "saleId": 9,
    *                    "sale": {
    *                        "saleId": 9,
    *                        "uuid": "cdfdf370-586a-11e8-b62c-f116151c6c43",
    *                        "userEmail": "christiang15@hotmail.com",
    *                        "saleDate": "2018-05-15T17:07:15.468Z",
    *                        "saleAmount": "200",
    *                        "saleStatus": true
    *                    }
    *                },
    *                {
    *                    "UsersSalesId": 3,
    *                    "userId": 1,
    *                    "saleId": 8,
    *                    "sale": {
    *                        "saleId": 8,
    *                        "uuid": "bfb68e30-586a-11e8-9365-ad0a948dee97",
    *                        "userEmail": "christiang15@hotmail.com",
    *                        "saleDate": "2018-05-15T17:06:49.890Z",
    *                        "saleAmount": "300",
    *                        "saleStatus": true
    *                    }
    *                }
    *            ],
    *            "success": true
    *     }
    */
    router.get('/user/sale', (req, res) => {
        const saleController = controllers.SaleController;
        saleController.showSales(req, res);
    });

    /**
    * @api {GET} /user/all Lista usuarios y ventas
    * @apiUse CustomContentType
    * @apiVersion 1.0.0
    * @apiName findAllUsersAndSales
    * @apiGroup User
    * @apiUse successResponse
    * @apiUse errorResponse
    *
    * @apiSuccess {Object} data     Datos de usuario y ventas.
    *
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *        "code": 200,
    *        "data": [
    *            {
    *                "ids": 2,
    *                "email": "elbriag@hotmail.com",
    *                "firstname": "gabriel",
    *                "lastname": "gimenez",
    *                "address": "williams 1319",
    *                "status": true,
    *                "total": "494.20",
    *                "num_vetas": "7"
    *            },
    *            {
    *                "ids": 1,
    *                "email": "christiang15@hotmail.com",
    *                "firstname": "christian",
    *                "lastname": "gimenez",
    *                "address": "williams 1319",
    *                "status": true,
    *                "total": "600",
    *                "num_vetas": "7"
    *            }
    *        ],
    *        "success": true
    *     }
    */
    router.get('/user/all', (req, res) => {
        const userController = controllers.UserController;
        userController.allUsersAndSales(req, res);
    });

    return router;
};