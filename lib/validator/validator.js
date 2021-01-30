"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.prototype.isValidDate = function (input) {
        var regex = new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
        if (regex.test(input)) {
            return input;
        }
        else {
            throw new Error('The dateformat is invalid.');
        }
    };
    Validator.prototype.isValidInteger = function (input) {
        var parsed = parseInt(input);
        if (!isNaN(parsed)) {
            return parsed;
        }
        else {
            throw new Error('The provided value is not an integer.');
        }
    };
    return Validator;
}());
exports.Validator = Validator;
