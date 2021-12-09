"use strict";
exports.__esModule = true;
exports.Module = void 0;
var Module = /** @class */ (function () {
    function Module() {
        this.units = [];
    }
    Module.prototype.getMName = function () {
        return this.Mname;
    };
    Module.prototype.setMName = function (_name) {
        this.Mname = _name;
    };
    Module.prototype.getUnits = function () {
        return this.units;
    };
    Module.prototype.setUnit = function (_unit) {
        this.units.push(_unit);
    };
    return Module;
}());
exports.Module = Module;
