import { Unit } from "./Unit";

export class Module {
    Mname: string;
    units: Unit[] = [];

    getMName(): string {
        return this.Mname;
    }

    setMName(_name: string) {
        this.Mname = _name;
    }

    getUnits(): Unit[] {
        return this.units;
    }

    setUnit(_unit: Unit) {
        this.units.push(_unit);
    }

}