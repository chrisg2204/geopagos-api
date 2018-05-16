'use strict';

// Config
const configApp = require('../config/App');
// Libs
const validator = require('validator');
const crypto = require('crypto');
const chalk = require('chalk');
const log = require('loglevel');
// Utils
const response = require('../utils/ResponseUtil');
const validateUtil = require('../utils/validateUtil');
// Models
const models = require('../models/index');

/**
 * Controlador para las operaciones de Ventas.
 * @module controllers
 * @class SaleController
 */
class SaleController {

	constructor() {}

	makeSale(req, res) {
		let body = req.body;
		let prepared = true;
		let message = '';

		if (body.email && body.amount) {
			if (validator.isEmail(body.email) === false) {
				prepared = false;
				message = 'Invalid email';
			}
			if (validator.isFloat(body.amount) === false) {
				prepared = false;
				message = 'Invalid Amount';
			}
			if (prepared) {
				let users = models.users;
				users.findOneUser({
						where: {
							userEmail: body.email,
							$and: {
								userStatus: true
							}
						}
					})
					.then(userFinded => {
						if (!userFinded) {
							log.debug(`${chalk.yellow('Warning')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/sale - SaleController?makeSale')}`);
							response.sendResponse(res, 409, 'User is disabled', false);
						} else {
							let sales = models.sales;
							sales.addSale({
									userEmail: body.email,
									saleAmount: body.amount
								})
								.then(saleCreated => {
									let userSales = models.users_sales;
									userSales.addUserSale({
											userId: userFinded.dataValues.userId,
											saleId: saleCreated.dataValues.saleId
										})
										.then(userSaleCreated => {
											log.debug(`${chalk.green('Success')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/sale - SaleController?makeSale')}`);
											response.sendResponse(res, 200, 'Sale Created', true);
										})
										.catch(err => {
											log.error(err);
											log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/sale - SaleController?makeSale')}`);
										});
								})
								.catch(err => {
									log.error(err);
									log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/sale - SaleController?makeSale')}`);
								});
						}
					})
					.catch(err => {
						log.error(err);
						log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/sale - SaleController?makeSale')}`);
					});
			} else {
				response.sendResponse(res, 400, message, false);
			}
		} else {
			response.sendResponse(res, 400, 'Form incomplete', false);
		}
	}

	cancelSale(req, res) {
		let body = req.body;
		let prepared = true;
		let message = '';

		if (body.uuid) {
			if (validator.isUUID(body.uuid) === false) {
				prepared = false;
				message = 'Invalid UUID';
			}
			if (prepared) {
				let sales = models.sales;
				sales.findOneSale({
						uuid: body.uuid
					})
					.then(saleFinded => {
						if (!saleFinded) {
							log.debug(`${chalk.yellow('Warning')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/sale - UserController?cancelSale')}`);
							response.sendResponse(res, 404, 'Not found', false);
						} else {
							sales.updateSale({
									saleStatus: false
								}, {
									where: {
										uuid: body.uuid
									}
								})
								.then(saleDisabled => {
									log.debug(`${chalk.green('Success')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/sale - SaleController?cancelSale')}`);
									response.sendResponse(res, 200, 'Sale disabled', true);
								})
								.catch(err => {
									log.error(err);
									log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/sale - SaleController?cancelSale')}`);
								});
						}
					})
					.catch(err => {
						log.error(err);
						log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/sale - SaleController?cancelSale')}`);
					});
			} else {
				response.sendResponse(res, 400, message, false);
			}
		} else {
			response.sendResponse(res, 400, 'Form incomplete', false);
		}
	}

	showSales(req, res) {
		let query = req.query;
		let prepared = true;
		let message = '';

		if (query.email) {
			if (validator.isEmail(query.email) === false) {
				prepared = false;
				message = 'Invalid email';
			}
			if (prepared) {
				let users = models.users;
				users.findOneUser({
						where: {
							userEmail: query.email
						}
					})
					.then(userFinded => {
						if (!userFinded) {
							log.debug(`${chalk.yellow('Warning')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/sale - SaleController?showSales')}`);
							response.sendResponse(res, 404, 'Not found', false);
						} else {
							users.findUserRelationship({
									where: query.email
								})
								.then(userFinded => {
									log.debug(`${chalk.green('Success')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/sale - SaleController?showSales')}`);
									response.sendResponse(res, 200, userFinded.users_sales, true);

								})
								.catch(err => {
									log.error(err);
									log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/sale - SaleController?showSales')}`);
								});
						}
					})
					.catch(err => {
						log.error(err);
						log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/sale - SaleController?showSales')}`);
					});
			} else {
				response.sendResponse(res, 400, message, false);
			}
		} else {
			response.sendResponse(res, 400, 'Query params incomplete', false);
		}
	}

}

module.exports = new SaleController();