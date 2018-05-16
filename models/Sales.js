'use strict';

// Libs
let moment = require('moment');

/**
 * Modelo encargado de realizar las operaciones
 * de base de dato para la entidad sales.
 * @module models
 * @name Sales
 * @type {Object}
 */
module.exports = (sequelize, DataTypes) => {
	let Sales = sequelize.define('sales', {
		saleId: {
			field: 'id',
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			validate: {
				isInt: true
			}
		},
		uuid: {
			field: 'uuid',
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1
		},
		userEmail: {
			field: 'user_email',
			type: DataTypes.STRING,
			allowNull: false
		},
		saleDate: {
			field: 'date',
			type: DataTypes.DATE,
			defaultValue: moment()
		},
		saleAmount: {
			field: 'amount',
			type: DataTypes.FLOAT,
			allowNull: false
		},
		saleStatus: {
			field: 'status',
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
	}, {
		classMethods: {
			/**
			 * Relaciona los modelos entre si.
			 * @method associate
			 * @param  {Object} models modelos listados
			 * @return {[type]}        [description]
			 */
			associate: (models) => {

			},
			addSale: (dataObject) => {
				return Sales.create(dataObject);
			},
			findOneSale: (conditionObject) => {
				return Sales.findOne({
					where: conditionObject
				});
			},
			updateSale: (updateObject, conditionObject) => {
				return Sales.update(updateObject, conditionObject);
			},
			getSales: (conditionObject) => {
				return Sales.findAll({
					where: conditionObject
				});
			}
		}
	});

	return Sales;
};