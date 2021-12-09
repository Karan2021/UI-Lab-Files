import { Module } from "./Module";
import { Training } from "./Training";

export class Course{
    Cname:string;
    modules:Module[] = [];
    trainings:Training[] = [];


    getCName():string{
        return this.Cname;
    }

    setCName(_name : string){
        this.Cname = _name;
    }

    getModules():Module[]{
        return this.modules;
    }

    setModule(_module : Module){
        this.modules.push(_module);
    }

    getTrainings():Training[]{
        return this.trainings;
    }

    setTraining(_training : Training){
        this.trainings.push(_training);
    }

}