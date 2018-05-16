'use strict';

// Config
let appConfig = require('./config/App');

// Libs
let log = require('loglevel');
let chalk = require('chalk');
let bodyParser = require('body-parser');
let cors = require('cors');
let express = require('express');

/**
 * Archivo Inicial del web-service.
 * @name index
 * @type {Object}
 */

let app = express();

/**
 * Agrega los middlewares a usar por defecto.
 * @method loadMiddDefault
 */
function loadMiddDefault() {
    let midd = require('./middlewares/index'),
        loadMidd = appConfig.MIDDLEWARES_AUTOLOAD,
        len = loadMidd.length;
    if (len > 0) {
        for (var i = 0; i < len; i++) {
            app.use(midd[loadMidd[i]]);
        }
    }
}

/**
 * Inicializa el servicio.
 * @method initService
 */
function initService() {
    app.use(cors({
        origin: '*'
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(require('./routes')(express));

    loadMiddDefault();

    if (process.env.NODE_ENV == 'test') {
        log.setLevel('error');

        app.listen(appConfig.TEST_API_PORT, function() {
            log.info(`${chalk.white('Web-Service listening port:')} ${chalk.blue(appConfig.TEST_API_PORT)} - Env : ${chalk.yellow(process.env.NODE_ENV)}`);
        });
    } else {
        log.setLevel('trace');
        app.listen(appConfig.API_PORT, function() {
            log.info(`${chalk.white('Web-Service listening port:')} ${chalk.blue(appConfig.API_PORT)} - Env : ${chalk.green(process.env.NODE_ENV)}`);
        });
    }
}

initService();

module.exports = app; // for testing