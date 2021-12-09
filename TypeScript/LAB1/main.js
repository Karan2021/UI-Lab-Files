"use strict";
exports.__esModule = true;
var Course_1 = require("./Course");
var Module_1 = require("./Module");
var Topic_1 = require("./Topic");
var Trainee_1 = require("./Trainee");
var Trainer_1 = require("./Trainer");
var Training_1 = require("./Training");
var Unit_1 = require("./Unit");
var Vendor_1 = require("./Vendor");
var courses = [];
// creating the object of Topic class
var topic1 = new Topic_1.Topic();
topic1.Tname = "Topic1";
// creating the object of Unit class
var unit1 = new Unit_1.Unit();
unit1.Uname = "Unit1";
unit1.durationHrs = 10;
unit1.topics.push(topic1);
// creating the object of Unit class
var unit2 = new Unit_1.Unit();
unit2.Uname = "Unit2";
unit2.durationHrs = 8;
unit2.topics.push(topic1);
// creating the object of Module class
var module1 = new Module_1.Module();
module1.setMName("Module1");
module1.setUnit(unit1);
// creating the object of Module class
var module2 = new Module_1.Module();
module2.setMName("Module2");
module2.setUnit(unit2);
// creating the object of Vendor class
var vendor1 = new Vendor_1.Vendor();
vendor1.Vname = "Vendor1";
// creating the object of Trainer class
var trainer1 = new Trainer_1.Trainer();
trainer1.setTName("Rakesh");
trainer1.setVendor(vendor1);
// creating the object of Trainer class
var trainer2 = new Trainer_1.Trainer();
trainer2.setTName("Sanket");
trainer2.setVendor(vendor1);
// creating the object of Trainee class
var trainee1 = new Trainee_1.Trainee();
trainee1.setTraineeName("Manoj");
var trainee2 = new Trainee_1.Trainee();
trainee2.setTraineeName("Vybhav");
var trainee3 = new Trainee_1.Trainee();
trainee3.setTraineeName("Nagendra Sai");
// creating the object of Training class
var training1 = new Training_1.Training();
training1.setId(123);
training1.setTrainee(trainee1);
training1.setTrainee(trainee2);
training1.setTrainer(trainer1);
var training2 = new Training_1.Training();
training2.setId(123);
training2.setTrainee(trainee3);
training2.setTrainee(trainee2);
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
var course1 = new Course_1.Course();
course1.setCName("Course1");
course1.setModule(module1);
course1.setTraining(training1);
var course2 = new Course_1.Course();
course2.setCName("Course2");
course2.setModule(module2);
course2.setTraining(training2);
//setting values for Training obj after creating object of Course class
training1.setCourse(course1);
training2.setCourse(course2);
courses.push(course1);
courses.push(course2);
console.log("Total number of trainees for each course : ");
courses.map(function (course) {
    console.log(course.getCName() + ": ");
    course.trainings.map(function (training) {
        console.log("\t" + training.getTotalNumberOfTrainees());
    });
});
console.log("**********************************************");
console.log("Trainers names for each course : ");
courses.map(function (course) {
    console.log(course.getCName() + ": ");
    course.trainings.map(function (training) {
        console.log("\t" + training.getTrainerName());
    });
});
console.log("**********************************************");
