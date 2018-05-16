'use strict';

// Libs
let fs = require("fs");
let path = require("path");
let Sequelize = require("sequelize");
// Utils
var sequelize = require('../utils/ModuleFactoryUtil').getSequelizeInstance();

var db = {};

/**
 * Exporta y asocia todos los modelos.
 * @module models
 * @name index
 * @type {Object}
 */

// Exporta los modelos.
var handleModels = function(directory) {

    let stat = fs.lstatSync(directory);
    if (stat.isDirectory()) {
        let files = fs.readdirSync(directory);
        let fileListLen = files.length;
        for (let i = 0; i < fileListLen; i++) {
            let file = path.join(directory, files[i]);
            handleModels(file);
        }

    } else {
        if (directory.indexOf(".") !== 0 && directory.indexOf("index.js") < 0 && directory.indexOf(".json") <= 0) {
            var model = sequelize.import(directory);
            db[model.name] = model;
        }
    }
}

handleModels(__dirname);

// Asocia los modelos.
Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

// Exporta instancia y tipo de datos.
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;