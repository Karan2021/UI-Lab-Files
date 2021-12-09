import { Training } from "./Training";
import { Vendor } from "./Vendor";

export class Trainer {
    Tname: string;
    vendor: Vendor;
    trainings:Training[] = [];

    getTName(): string {
        return this.Tname;
    }

    setTName(_name: string) {
        this.Tname = _name;
    }

    getVendor(): Vendor {
        return this.vendor;
    }

    setVendor(_vendor: Vendor) {
        this.vendor = _vendor;
    }

    getTrainings():Training[]{
        return this.trainings;
    }

    setTraining(_training : Training){
        this.trainings.push(_training);
    }
}