#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var clear_1 = __importDefault(require("clear"));
var figlet_1 = __importDefault(require("figlet"));
var commander_1 = __importDefault(require("commander"));
var friday_1 = require("./friday/friday");
var validator_1 = require("./validator/validator");
clear_1.default();
console.log(chalk_1.default.red(figlet_1.default.textSync('friday-cli', { horizontalLayout: 'full' })));
commander_1.default
    .version('0.0.3')
    .description('Friday CLI')
    .option('-t, --thirteen', 'get the nearest friday the 13th, possible to combine with --from')
    .option('-f, --from <string>', 'from that date format: YYYY-MM-DD')
    .option('-b, --black', 'get the black friday of a year, without --year flag return the current year')
    .option('-y, --year <string>', 'in that year')
    .parse(process.argv);
try {
    var _a = commander_1.default.opts(), thirteen = _a.thirteen, black = _a.black, from = _a.from, year = _a.year;
    var friday = new friday_1.Friday();
    var validator = new validator_1.Validator();
    if (thirteen) {
        var nextFridayThe13th = friday.getNextFridayThe13th(from ? new Date(validator.isValidDate(from)) : new Date());
        console.log(nextFridayThe13th.toLocaleDateString('hu-HU'));
    }
    if (black) {
        var blackFriday = friday.getDateOfBlackFridayByYear(year ? validator.isValidInteger(year) : new Date().getFullYear());
        console.log(blackFriday.toLocaleDateString('hu-HU'));
    }
}
catch (error) {
    console.log(chalk_1.default.red(error.toString()));
}
if (!process.argv.slice(2).length) {
    commander_1.default.outputHelp();
}
