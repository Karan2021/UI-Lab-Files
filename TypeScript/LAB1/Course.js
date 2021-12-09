"use strict";
exports.__esModule = true;
exports.Course = void 0;
var Course = /** @class */ (function () {
    function Course() {
        this.modules = [];
        this.trainings = [];
    }
    Course.prototype.getCName = function () {
        return this.Cname;
    };
    Course.prototype.setCName = function (_name) {
        this.Cname = _name;
    };
    Course.prototype.getModules = function () {
        return this.modules;
    };
    Course.prototype.setModule = function (_module) {
        this.modules.push(_module);
    };
    Course.prototype.getTrainings = function () {
        return this.trainings;
    };
    Course.prototype.setTraining = function (_training) {
        this.trainings.push(_training);
    };
    return Course;
}());
exports.Course = Course;
