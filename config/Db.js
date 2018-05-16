/**
 * Objeto con las propiedades de configuración de
 * la base de datos.
 * @module config
 * @name Db
 * @type {Object}
 */
module.exports = {
    /**
     * Muestra las sentencias SQL ejecutadas por el ORM.
     * @property LOG_SEQUELIZE_TRANSACTIONS
     */
    LOG_SEQUELIZE_TRANSACTIONS: false,
    /**
     * Contiene los parametros de configuracion de las bases de datos
     * que van a ser usadas por la aplicación.
     *
     * @var DATABASE
     * @type Object
     */
    /**
     * Conexión de base de datos.
     * @property DATABASE_CONFIG
     */
    DATABASE_CONFIG: {
        HOST: '127.0.0.1',
        NAME: 'geopagos',
        USERNAME: 'postgres',
        PASSWORD: 'casa1234',
        DB_TYPE: 'postgres',
        POOL: {
            max: 5,
            min: 0,
            idle: 100
        },
        TIMEZONE: '-04:00'
    },
};