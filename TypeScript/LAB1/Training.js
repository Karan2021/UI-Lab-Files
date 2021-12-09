"use strict";
exports.__esModule = true;
exports.Training = void 0;
var Training = /** @class */ (function () {
    function Training() {
        this.trainees = [];
    }
    Training.prototype.setId = function (_id) {
        this.id = _id;
    };
    Training.prototype.getId = function () {
        return this.id;
    };
    Training.prototype.getTrainees = function () {
        return this.trainees;
    };
    Training.prototype.setTrainee = function (_trainne) {
        this.trainees.push(_trainne);
    };
    Training.prototype.getTrainers = function () {
        return this.trainer;
    };
    Training.prototype.setTrainer = function (_trainer) {
        this.trainer = _trainer;
    };
    Training.prototype.getCourse = function () {
        return this.course;
    };
    Training.prototype.setCourse = function (_course) {
        this.course = _course;
    };
    // returning trainer name
    Training.prototype.getTrainerName = function () {
        return this.trainer.Tname;
    };
    // returning training Vendor name
    Training.prototype.getTrainingVendorName = function () {
        return this.trainer.vendor.getVName();
    };
    // returning total duration Hours
    Training.prototype.getTotalDurationHours = function () {
        var total = 0;
        this.course.modules.map(function (mval) {
            mval.units.map(function (uval) {
                total += uval.getDurationHrs();
            });
        });
        return total;
    };
    Training.prototype.getTotalNumberOfTrainees = function () {
        return this.trainees.length;
    };
    return Training;
}());
exports.Training = Training;
