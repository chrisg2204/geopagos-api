'use strict';

// Libs
let fs = require('fs');
let path = require('path');

/**
 * Exporta todos los controladores.
 * @module controllers
 * @name index
 * @type {Object}
 */

let controllers = {};

fs.readdirSync(__dirname)
	.filter(function(file) {
		return (file.indexOf('.') !== -1) && (file.indexOf('.') !== 0) && (file !== 'index.js')
	})
	.forEach(function(file) {
		let fnc = require(path.join(__dirname, file));
		let nameControllers = file.substring(0, file.indexOf('.'));
		controllers[nameControllers] = fnc;
	})

module.exports = controllers;