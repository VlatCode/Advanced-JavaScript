// ## Exercise 1
// Create 3 object templates. Academy, Student and Subject. The structure should be:
// Academy
// * Name - string
// * Students - array of Students
// * Subjects - array of Subjects
// * Start - Date when it starts
// * End - Date when it ends
// * NumberOfClasses - number of subjects * 10, not settable
// * PrintStudents - method that prints all students in console
// * PrintSubjects - method that prints all subjects in console

function Academy(name, students, subjects, startDate, endDate) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.startDate = startDate;
    this.endDate = endDate;
    this.numberOfClasses = subjects.length * 10;
    this.printStudents = function () {
        console.log(students);
    };
    this.printSubjects = function () {
        console.log(subjects);
    }
}

let academy1 = new Academy ('Web Development', ['Mario', 'Todor', 'Bojan'], ['Introduction', 'HTML & CSS', 'JS Basic', 'JS Advanced'], '01.11.2021', '01.11.2022');


// Subject
// * Title - string
// * NumberOfClasses - default 10, not settable
// * isElective - boolean
// * Academy - Academy object
// * Students - array of Students
// * OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number. The number can't be smaller than 3.

function Subject(title, numberOfClasses, isElective, academy, students) {
    this.title = title;
    this.numberOfClasses = numberOfClasses;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
    this.overrideClasses = function (number) {
        if (number >= 3) {
            this.numberOfClasses = number;
        }
    }
}

let subject1 = new Subject('.NET', 10, true, academy1.name, ['Mario', 'Todor', 'Bojan']);
subject1.overrideClasses(5); // Overrides the default 10 classes


// Student
// * FirstName - string
// * LastName - string
// * Age - number
// * CompletedSubjects - emptyArray as default, not settable
// * Academy - null as default, not settable 
// * CurrentSubject - null as default, not settable
// * StartAcademy - accepts Academy object that it sets to the Academy property of the student
// * StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;

    // ## Exercise 2
    // Make the functions StartAcademy and StartSubject dynamic.
    // * StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property Students ( The academy that he is starting )
    // * StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject

    this.startAcademy = function (academy) {
        this.academy = academy;
        academy1.students.push(this.firstName);
        
    };
    this.startSubject  = function (subject) {
        if (this.academy && academy1.subjects.includes(subject)) {
            if (this.currentSubject !== subject) {
                if (this.currentSubject) {
                    this.completedSubjects.push(this.currentSubject);
                }
                this.currentSubject = subject;
            }
        } else {
            throw Error;
        }
        subject1.students.push(this.firstName);
    }
}

let student1 = new Student ('Vlatko', 'Nikolovski', 24);
let student2 = new Student ('Kristijan', 'Mijushkovic', 23);

student1.startAcademy(academy1.name); // adds student1 to Academy.students
student2.startAcademy(academy1.name); // adds student2 to Academy.students

student1.startSubject('HTML & CSS'); // currentSubject -> completedSubjects & adds student1 to Subject.students
student2.startSubject('HTML & CSS'); // currentSubject -> completedSubjectss & adds student2 to Subject.students

student1.startSubject('JS Basic'); // new currentSubject, currentSubject -> completedSubjects
student2.startSubject('JS Basic'); // new currentSubject, currentSubject -> completedSubjects

student1.startSubject('JS Advanced'); // new currentSubject
student2.startSubject('JS Advanced'); // new currentSubject

console.log(academy1);
console.log(subject1);

console.log(student1);
console.log(student2);












