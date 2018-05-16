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
 * Controlador para las operaciones de Usuarios.
 * @module controllers
 * @class UserController
 */
class UserController {

	constructor() {}

	add(req, res) {
		let body = req.body;
		let toCreate = {};
		let prepared = true;
		let message = '';
		if (body.email && body.firstname && body.lastname) {
			if (validator.isEmail(body.email) === false) {
				prepared = false;
				message = 'Invalid email';
			}
			if (validateUtil.verifySpacesAndLetters(body.firstname.trim()) === false) {
				prepared = false;
				message = 'Only letters allowed for firstname';
			}
			if (validateUtil.verifySpacesAndLetters(body.lastname.trim()) === false) {
				prepared = false;
				message = 'Only letters allowed for lastname';
			}
			if (prepared) {
				let users = models.users;
				users.findOneUser({
						where: {
							userEmail: body.email
						}
					}).then(userFinded => {
						if (!userFinded) {
							toCreate.userEmail = body.email;
							toCreate.userFirstname = body.firstname;
							toCreate.userLastname = body.lastname;
							toCreate.userAddress = (body.address != undefined) ? body.address : '';

							users.addUser(toCreate)
								.then(userCreated => {
									log.debug(`${chalk.green('Success')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/add - UserController?add')}`);
									response.sendResponse(res, 200, 'User Created', true);
								})
								.catch(err => {
									log.error(err);
									log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/add - UserController?add')}`);
								});
						} else {
							log.debug(`${chalk.yellow('Warning')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/add - UserController?add')}`);
							response.sendResponse(res, 409, 'This email already exist', false);
						}
					})
					.catch(err => {
						log.error(err);
						log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/add - UserController?add')}`);
					});
			} else {
				response.sendResponse(res, 400, message, false);
			}
		} else {
			response.sendResponse(res, 400, 'Form incomplete', false);
		}
	}

	approve(req, res) {
		let body = req.body;
		let prepared = true;
		let message = '';

		if (body.email) {
			if (validator.isEmail(body.email) === false) {
				prepared = false;
				message = 'Invalid email';
			}
			if (prepared) {
				let users = models.users;
				users.findOneUser({
						where: {
							userEmail: body.email
						}
					})
					.then(userFinded => {
						if (!userFinded) {
							log.debug(`${chalk.yellow('Warning')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/approve - UserController?approve')}`);
							response.sendResponse(res, 404, 'Not found', false);
						} else {
							users.updateUser({
									userStatus: true
								}, {
									where: {
										userEmail: body.email
									}
								})
								.then(userUpdated => {
									log.debug(`${chalk.green('Success')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/approve - UserController?approve')}`);
									response.sendResponse(res, 200, 'User Approve', true);
								})
								.catch(err => {
									log.error(err);
									log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/approve - UserController?approve')}`);
								});
						}
					})
					.catch(err => {
						log.error(err);
						log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/approve - UserController?approve')}`);
					});
			} else {
				response.sendResponse(res, 400, message, false);
			}
		} else {
			response.sendResponse(res, 400, 'Form incomplete', false);
		}
	}

	disable(req, res) {
		let body = req.body;
		let prepared = true;
		let message = '';

		if (body.email) {
			if (validator.isEmail(body.email) === false) {
				prepared = false;
				message = 'Invalid email';
			}

			if (prepared) {
				let users = models.users;
				users.findOneUser({
						where: {
							userEmail: body.email
						}
					})
					.then(userFinded => {
						if (!userFinded) {
							log.debug(`${chalk.yellow('Warning')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/disable - UserController?disable')}`);
							response.sendResponse(res, 404, 'Not found', false);
						} else {
							users.updateUser({
									userStatus: false
								}, {
									where: {
										userEmail: body.email
									}
								})
								.then(userDisabled => {
									log.debug(`${chalk.green('Success')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/disable - UserController?disable')}`);
									response.sendResponse(res, 200, 'User disabled', true);
								})
								.catch(err => {
									log.error(err);
									log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/disable - UserController?disable')}`);
								})
						}
					})
					.catch(err => {
						log.error(err);
						log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/disable - UserController?disable')}`);
					});
			} else {
				response.sendResponse(res, 400, message, false);
			}
		}
	}

	update(req, res) {
		let body = req.body;
		let toUpdate = {};
		let prepared = true;
		let message = '';

		if (body.email) {
			if (validator.isEmail(body.email) === false) {
				prepared = false;
				message = 'Invalid email';
			}
			for (let i = 0; i < Object.keys(body).length; i++) {
				if (Object.keys(body)[i] == 'firstname') {
					if (validateUtil.verifySpacesAndLetters(body.firstname.trim()) === false) {
						prepared = false;
						message = 'Only letters allowed for firstname';
						break;
					} else {
						toUpdate.userFirstname = body.firstname;
					}
				}
				if (Object.keys(body)[i] == 'lastname') {
					if (validateUtil.verifySpacesAndLetters(body.lastname.trim()) === false) {
						prepared = false;
						message = 'Only letters allowed for lastname';
						break;
					} else {
						toUpdate.userLastname = body.lastname;
					}
				}
				if (Object.keys(body)[i] == 'address') {
					toUpdate.userAddress = body.address;
				}
			}
			if (prepared) {
				let users = models.users;
				users.findOneUser({
						where: {
							userEmail: body.email
						}
					})
					.then(userFinded => {
						if (!userFinded) {
							log.debug(`${chalk.yellow('Warning')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/update - UserController?update')}`);
							response.sendResponse(res, 404, 'Not found', false);
						} else {
							users.updateUser(toUpdate, {
									where: {
										userEmail: body.email
									}
								})
								.then(userUpdated => {
									log.debug(`${chalk.green('Success')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/update - UserController?update')}`);
									response.sendResponse(res, 200, 'User Update', true);
								})
								.catch(err => {
									log.error(err);
									log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/update - UserController?update')}`);
								});
						}
					})
					.catch(err => {
						log.error(err);
						log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/update - UserController?update')}`);
					});
			} else {
				response.sendResponse(res, 400, message, false);
			}
		} else {
			response.sendResponse(res, 400, 'Form incomplete', false);
		}
	}

	allUsersAndSales(req, res) {
		let users = models.users;
		users.findAllUsersAndSales()
			.then(finded => {
				if (finded.length) {
					log.debug(`${chalk.green('Success')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/all - UserController?allUsersAndSales')}`);
					response.sendResponse(res, 200, finded[0], true);
				} else {
					log.debug(`${chalk.yellow('Warning')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/all - UserController?allUsersAndSales')}`);
					response.sendResponse(res, 404, 'Not found', false);
				}
			})
			.catch(err => {
				log.error(err);
				log.debug(`${chalk.red('Error')} ${chalk.magenta('Exec')} ${chalk.cyan(req.method)} ${chalk.blue('/user/all - UserController?allUsersAndSales')}`);
			});
	}

}

module.exports = new UserController();