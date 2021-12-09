"use strict";
exports.__esModule = true;
exports.Trainee = void 0;
var Trainee = /** @class */ (function () {
    function Trainee() {
        this.trainings = [];
    }
    Trainee.prototype.getTraineeName = function () {
        return this.TraineeName;
    };
    Trainee.prototype.setTraineeName = function (_name) {
        this.TraineeName = _name;
    };
    Trainee.prototype.getTrainings = function () {
        return this.trainings;
    };
    Trainee.prototype.setTraining = function (_training) {
        this.trainings.push(_training);
    };
    return Trainee;
}());
exports.Trainee = Trainee;
