/**
 * Object ৩ উপায়ে লেখা যায় 
 * Object literal
 * Object instance create করে
 * Object Constructor এর মাধ্যমে
 */


// Object literal
//  const Person = {
//     first_name : 'Md sanowar',
//     last_name: 'Hossen',
//     age: 30,
//     country: 'Bangladesh',
//     bangladeshi: true,
//     fullName: () => {
//         return `My full name is ${Person.first_name} ${Person.last_name}`
//     }
// }

//  console.log(Person.bangladeshi);
// console.log(Person.age);


// Object Instance
// const person = new Object();
// person.name = "Md Sanowar Hossen",
// person.age = 30,
// person.nationality = "Bangladeshi",
// person.fullName = () => {
//     return `My name is ${person.name}`;
// }

// console.log(person.age);


// Object Constructor
 function person(){
    this.name = "Md Sanowar Hossen",
    this.age = 30,
    this.nationality = "Bangladeshi",
    this.fullName = () => {
        return `${this.name}`;
    }
 }

 const per = new person();
 console.log(per.fullName());