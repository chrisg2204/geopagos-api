'use strict';

// Libs
let moment = require('moment');

/**
 * Modelo encargado de realizar las operaciones
 * de base de dato para la entidad users.
 * @module models
 * @name Users
 * @type {Object}
 */
module.exports = (sequelize, DataTypes) => {
	let Users = sequelize.define("users", {
		userId: {
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
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		userFirstname: {
			field: 'firstname',
			type: DataTypes.STRING,
			defaultValue: ''
		},
		userLastname: {
			field: 'lastname',
			type: DataTypes.STRING,
			defaultValue: ''
		},
		userAddress: {
			field: 'address',
			type: DataTypes.STRING
		},
		userStatus: {
			field: 'status',
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		creationTime: {
			field: 'created',
			type: DataTypes.DATE,
			defaultValue: moment()
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
				Users.hasMany(models.users_sales, {
					foreignKey: 'userId',
				});
			},
			addUser: (dataObject) => {
				return Users.create(dataObject);
			},
			findOneUser: (conditionObject) => {
				return Users.findOne(conditionObject);
			},
			updateUser: (updateObject, conditionObject, ) => {
				return Users.update(updateObject, conditionObject);
			},
			findUserRelationship: (conditionObject) => {
				let models = require('./index');
				return Users.findOne({
					conditionObject,
					include: [{
						model: models.users_sales,
						include: [{
							model: models.sales
						}]
					}]
				});
			},
			findAllUsersAndSales: () => {
				let sql = `
				SELECT
					a.id as ids,
					a.email,
					a.firstname,
					a.lastname,
					a.address,
					a.status,
					sum(c.amount) AS total,
					(SELECT COUNT(*) FROM sales a
					RIGHT OUTER JOIN users_sales b
						ON a.id = b.id_sale
					RIGHT OUTER JOIN users c
						ON c.id = b.id_user) as num_vetas
				FROM public.users a
					LEFT OUTER JOIN users_sales b 
						ON a.id = b.id_user
					LEFT OUTER JOIN sales c
						ON c.id = b.id_sale
							WHERE 1 = 1 GROUP BY a.id;`;
				return sequelize.query(sql);
			}
		}
	});

	return Users;
};