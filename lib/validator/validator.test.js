"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tape_1 = __importDefault(require("tape"));
var validator_1 = require("./validator");
tape_1.default('isValidDate: 2021-01-23 should return true', function (t) {
    //arrange
    var validator = new validator_1.Validator();
    var input = '2021-01-23';
    //act
    var result = validator.isValidDate(input);
    //assert
    t.equal(result, input);
    t.end();
});
tape_1.default('isValidDate: 2021.01.23 should throw error', function (t) {
    //arrange
    var validator = new validator_1.Validator();
    //act
    t.throws(function () { return validator.isValidDate('2021.01.23'); }, 'The dateformat is invalid.');
    t.end();
});
tape_1.default('isValidDate: 2021-1-23 should throw error', function (t) {
    //arrange
    var validator = new validator_1.Validator();
    //act
    t.throws(function () { return validator.isValidDate('2021-1-23'); }, 'The dateformat is invalid.');
    t.end();
});
tape_1.default("isValidInteger: '2021' should return 2021", function (t) {
    //arrange
    var validator = new validator_1.Validator();
    var input = '2021';
    //act
    var result = validator.isValidInteger(input);
    //assert
    t.equal(result, 2021);
    t.end();
});
tape_1.default('isValidInteger: number should throw error', function (t) {
    //arrange
    var validator = new validator_1.Validator();
    //act
    t.throws(function () { return validator.isValidInteger('number'); }, 'The provided value is not an integer.');
    t.end();
});
