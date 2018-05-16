// Libs
const path = require("path");

/**
 * Objeto con las propiedades de configuración principal.
 * @module config
 * @name App
 * @type {Object}
 */
module.exports = {
    /**
     * Ruta del web-service.
     * @property API_LOCATION
     */
    API_LOCATION: path.join(__dirname, '../'),
    /**
     * Puerto de producción.
     * @property API_PORT
     */
    API_PORT: process.env.PORT || 3000,
    /**
     * Puerto para pruebas unitarias.
     * @property TEST_API_PORT
     */
    TEST_API_PORT: process.env.PORT || 3030,
    /**
     * Email que se usa para debugear.
     * @property DEBUG_MAIL
     */
    DEBUG_MAIL: 'chrisgabo15@gmail.com',
    /**
     * Url del web-service.
     * @property SERVICE_URL
     */
    SERVICE_URL: 'http://127.0.0.1:' + this.API_PORT + '/',
    /**
     * Especifica si el servidor va a tener multiples hilos de conexion.
     * @property MULTI_THREAD
     */
    MULTI_THREAD: {
        ACTIVE: false,
        POOL: 3
    },
    /**
     * Midlewares que van a ser precargados a las rutas creadas.
     * @property MIDDLEWARES_AUTOLOAD
     */
    MIDDLEWARES_AUTOLOAD: ['EnableCrossDomain']
};