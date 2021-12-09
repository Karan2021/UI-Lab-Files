import { Topic } from "./Topic";

export class Unit {
    Uname: string;
    durationHrs: number;
    topics: Topic[] = [];

    getUnitName(): string {
        return this.Uname;
    }

    setUnitName(_name: string) {
        this.Uname = _name;
    }

    getDurationHrs(): number {
        return this.durationHrs;
    }

    setDurationHrs(_dur: number) {
        this.durationHrs = _dur;
    }

    getTopics(): Topic[] {
        return this.topics;
    }

    setTopic(_topic: Topic) {
        this.topics.push(_topic);
    }

}