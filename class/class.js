/**
 * Class হলো অবজেক্ট এর ব্লু প্রিন্ট । ক্লাস হলো অবজেক্ট এর পূর্ববর্তী অবস্থা। যেমন
 * বরফ -----> পানি -------> বাষ্প । এখানে বরফ হলো ক্লাস আর পানি হলো অবজেক্ট
 * ক্লাসকে আমরা চাইলে অনেক জায়গায় ব্যবহার করতে পারি শুদু অবজেক্ট ক্রিয়েট করে করে
 */

class Person{
    first_name = "Sanowar"
    last_name = "Hossen"
    age = 30
    isBangladeshi = true
    city = "Dhaka"
    fullName(){
        console.log(`Full name is ${this.first_name} ${this.last_name}`);
    }
}

const person = new Person(); // পার্সন ক্লাসকে অবজেক্টে পরিনত করা হলো 
// const person2 = Person();
// const person3 = Person();

// console.log(person.fullName());
console.log(person.first_name);
console.log(person.last_name);
console.log(person.age);
console.log(person.isBangladeshi);