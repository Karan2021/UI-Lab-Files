"use strict";
exports.__esModule = true;
exports.Unit = void 0;
var Unit = /** @class */ (function () {
    function Unit() {
        this.topics = [];
    }
    Unit.prototype.getUnitName = function () {
        return this.Uname;
    };
    Unit.prototype.setUnitName = function (_name) {
        this.Uname = _name;
    };
    Unit.prototype.getDurationHrs = function () {
        return this.durationHrs;
    };
    Unit.prototype.setDurationHrs = function (_dur) {
        this.durationHrs = _dur;
    };
    Unit.prototype.getTopics = function () {
        return this.topics;
    };
    Unit.prototype.setTopic = function (_topic) {
        this.topics.push(_topic);
    };
    return Unit;
}());
exports.Unit = Unit;
