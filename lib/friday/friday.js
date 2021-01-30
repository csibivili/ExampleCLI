"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Friday = void 0;
var Friday = /** @class */ (function () {
    function Friday() {
    }
    Friday.prototype.getNextFridayThe13th = function (from) {
        var date = new Date(from);
        //base case
        if (date.getDate() === 13 && date.getDay() === 5) {
            return date;
        }
        date = this.addDays(date, 1);
        return this.getNextFridayThe13th(date);
    };
    Friday.prototype.getDateOfBlackFridayByYear = function (year) {
        var date = new Date(year + "-11-01");
        var counter = 0;
        while (counter < 4) {
            if (date.getDay() === 4) {
                counter++;
            }
            date = this.addDays(date, 1);
        }
        return date;
    };
    Friday.prototype.addDays = function (date, days) {
        var result = new Date(date);
        result.setTime(result.getTime() + days * 24 * 3600 * 1000);
        return result;
    };
    return Friday;
}());
exports.Friday = Friday;
