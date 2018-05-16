'use strict';

/**
 * Modelo encargado de realizar las operaciones
 * de base de dato para la entidad users_sales.
 * @module models
 * @name UsersSales
 * @type {Object}
 */
module.exports = (sequelize, DataTypes) => {
	let UsersSales = sequelize.define("users_sales", {
		UsersSalesId: {
			field: 'id',
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			validate: {
				isInt: true
			}
		},
		userId: {
			field: 'id_user',
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isInt: true
			}
		},
		saleId: {
			field: 'id_sale',
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isInt: true
			}
		}
	}, {
		/**
		 * Relaciona los modelos entre si.
		 * @method associate
		 * @param  {Object} models modelos listados
		 * @return {[type]}        [description]
		 */
		classMethods: {
			associate: (models) => {
				UsersSales.belongsTo(models.users, {
					foreignKey: 'userId'
				});
				UsersSales.belongsTo(models.sales, {
					foreignKey: 'saleId'
				});
			},
			addUserSale: (dataObject) => {
				return UsersSales.create(dataObject);
			}
		}
	});

	return UsersSales;
};