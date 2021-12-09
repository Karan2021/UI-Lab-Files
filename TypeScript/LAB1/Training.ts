import { Course } from "./Course";
import { Trainee } from "./Trainee";
import { Trainer } from "./Trainer";

export class Training {
    id: number;
    trainees: Trainee[] = [];
    trainer: Trainer;
    course: Course;

    setId(_id: number) {
        this.id = _id;
    }

    getId(): number {
        return this.id;
    }

    getTrainees(): Trainee[] {
        return this.trainees;
    }

    setTrainee(_trainne: Trainee) {
        this.trainees.push(_trainne);
    }

    getTrainers(): Trainer {
        return this.trainer;
    }

    setTrainer(_trainer: Trainer) {
        this.trainer = _trainer;
    }
    getCourse(): Course {
        return this.course;
    }

    setCourse(_course: Course) {
        this.course = _course;
    }

    // returning trainer name
    getTrainerName(): string {
        return this.trainer.Tname;
    }

    // returning training Vendor name
    getTrainingVendorName(): string {
        return this.trainer.vendor.getVName();
    }

    // returning total duration Hours
    getTotalDurationHours(): number {
        var total: number = 0;

        this.course.modules.map((mval) => {
            mval.units.map((uval) => {
                total += uval.getDurationHrs();
            })
        });

        return total;
    }

    getTotalNumberOfTrainees(): number {
        return this.trainees.length;
    }








}