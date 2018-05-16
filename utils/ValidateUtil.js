'use strict';

/**
 * Clase para manejar las validaciones.
 * @module utils
 * @class ValidateUtil
 */
class ValidateUtil {

	constructor() {

	}

	verifySpacesAndLetters(str) {
		let retVal = true;
		let regex = new RegExp(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g);
		if (!str.match(regex)) {
			retVal = false;
		}

		return retVal;
	}

}

module.exports = new ValidateUtil();