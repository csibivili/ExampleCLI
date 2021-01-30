"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tape_1 = __importDefault(require("tape"));
var friday_1 = require("./friday");
tape_1.default('getNextFridayThe13th: if from is 2021-01-23 it should return with 2021-08-13', function (t) {
    //arrange
    var friday = new friday_1.Friday();
    var from = new Date('2021-01-23');
    //act
    var result = friday.getNextFridayThe13th(from);
    //assert
    t.equal(+result, +new Date('2021-08-13'));
    t.end();
});
tape_1.default('addDays: if date is 2021-01-23 and 1 day added it should return 2021-01-24', function (t) {
    //arrange
    var friday = new friday_1.Friday();
    var date = new Date('2021-01-23');
    //act
    var result = friday.addDays(date, 1);
    //assert
    t.equal(+result, +new Date('2021-01-24'));
    t.end();
});
tape_1.default('addDays: if date is 2021-03-28 and 1 day added it should return 2021-03-29', function (t) {
    //arrange
    var friday = new friday_1.Friday();
    var date = new Date('2021-03-28');
    //act
    var result = friday.addDays(date, 1);
    //assert
    t.equal(+result, +new Date('2021-03-29'));
    t.end();
});
tape_1.default('getDateOfBlackFridayByYear: if year 2017 it should return 2017-11-24', function (t) {
    //arrange
    var friday = new friday_1.Friday();
    //act
    var result = friday.getDateOfBlackFridayByYear(2017);
    //assert
    t.equal(+result, +new Date('2017-11-24'));
    t.end();
});
tape_1.default('getDateOfBlackFridayByYear: if year 2018 it should return 2018-11-23', function (t) {
    //arrange
    var friday = new friday_1.Friday();
    //act
    var result = friday.getDateOfBlackFridayByYear(2018);
    //assert
    t.equal(+result, +new Date('2018-11-23'));
    t.end();
});
tape_1.default('getDateOfBlackFridayByYear: if year 2019 it should return 2019-11-29', function (t) {
    //arrange
    var friday = new friday_1.Friday();
    //act
    var result = friday.getDateOfBlackFridayByYear(2019);
    //assert
    t.equal(+result, +new Date('2019-11-29'));
    t.end();
});
