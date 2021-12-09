"use strict";
exports.__esModule = true;
exports.Trainer = void 0;
var Trainer = /** @class */ (function () {
    function Trainer() {
        this.trainings = [];
    }
    Trainer.prototype.getTName = function () {
        return this.Tname;
    };
    Trainer.prototype.setTName = function (_name) {
        this.Tname = _name;
    };
    Trainer.prototype.getVendor = function () {
        return this.vendor;
    };
    Trainer.prototype.setVendor = function (_vendor) {
        this.vendor = _vendor;
    };
    Trainer.prototype.getTrainings = function () {
        return this.trainings;
    };
    Trainer.prototype.setTraining = function (_training) {
        this.trainings.push(_training);
    };
    return Trainer;
}());
exports.Trainer = Trainer;
