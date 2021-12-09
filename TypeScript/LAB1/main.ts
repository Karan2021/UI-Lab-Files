import { Course } from "./Course";
import { Module } from "./Module";
import { Topic } from "./Topic";
import { Trainee } from "./Trainee";
import { Trainer } from "./Trainer";
import { Training } from "./Training";
import { Unit } from "./Unit";
import { Vendor } from "./Vendor";

let courses:Course[] = [];

// creating the object of Topic class
let topic1 = new Topic();
topic1.Tname = "Topic1";

// creating the object of Unit class
let unit1 = new Unit();
unit1.Uname = "Unit1";
unit1.durationHrs = 10;
unit1.topics.push(topic1);

// creating the object of Unit class
let unit2 = new Unit();
unit2.Uname = "Unit2";
unit2.durationHrs = 8;
unit2.topics.push(topic1);

// creating the object of Module class
let module1 = new Module();
module1.setMName("Module1");
module1.setUnit(unit1);

// creating the object of Module class
let module2 = new Module();
module2.setMName("Module2");
module2.setUnit(unit2);

// creating the object of Vendor class
let vendor1 = new Vendor();
vendor1.Vname="Vendor1";

// creating the object of Trainer class
let trainer1 = new Trainer();
trainer1.setTName("Rakesh");
trainer1.setVendor(vendor1);



// creating the object of Trainer class
let trainer2 = new Trainer();
trainer2.setTName("Sanket");
trainer2.setVendor(vendor1);



// creating the object of Trainee class
let trainee1 = new Trainee();
trainee1.setTraineeName("Manoj");


let trainee2 = new Trainee();
trainee2.setTraineeName("Vybhav");


let trainee3 = new Trainee();
trainee3.setTraineeName("Nagendra Sai");



// creating the object of Training class
let training1 = new Training();
training1.setId(123);
training1.setTrainee(trainee1)
training1.setTrainee(trainee2)
training1.setTrainer(trainer1);

let training2 = new Training();
training2.setId(123);
training2.setTrainee(trainee3)
training2.setTrainee(trainee2)
training2.setTrainer(trainer2);



//setting values for Trainer obj after creating object of Training class
trainer1.setTraining(training1);
trainer2.setTraining(training2);

//setting values for Trainee obj after creating object of Training class
trainee1.setTraining(training1);
trainee2.setTraining(training1);
trainee2.setTraining(training2);
trainee3.setTraining(training2);


//creating the object of Course class
let course1 = new Course();
course1.setCName("Course1");
course1.setModule(module1);
course1.setTraining(training1);

let course2 = new Course();
course2.setCName("Course2");
course2.setModule(module2);
course2.setTraining(training2);


//setting values for Training obj after creating object of Course class
training1.setCourse(course1);
training2.setCourse(course2);


courses.push(course1);
courses.push(course2);


console.log("Total number of trainees for each course : ")
courses.map((course) => {
    console.log(course.getCName() + ": ")
    course.trainings.map((training) => {
        console.log("\t"+training.getTotalNumberOfTrainees());
    })
});
console.log("**********************************************");


console.log("Trainers names for each course : ")
courses.map((course) => {
    console.log(course.getCName() + ": ")
    course.trainings.map((training) => {
        console.log("\t"+training.getTrainerName());
    })
});
console.log("**********************************************");





