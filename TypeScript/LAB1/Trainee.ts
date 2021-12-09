import { Training } from "./Training";

export class Trainee {
    TraineeName: string;
    trainings:Training[] = [];

    getTraineeName(): string {
        return this.TraineeName;
    }

    setTraineeName(_name: string) {
        this.TraineeName = _name;
    }

    getTrainings():Training[]{
        return this.trainings;
    }

    setTraining(_training : Training){
        this.trainings.push(_training);
    }
}