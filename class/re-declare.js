/**
 * ক্লাস রি-ডিক্লেয়ার করা পসিবল না। তবে একটি উপায়ে করা যায় সেটি ক্লাস এক্সপ্রেশন এর মাধ্যমে কিন্তু তবুও লাভ নেই কারন যখন অই ক্লাস এর অবজেক্ট তৈরি করতে যাবেন তখন এরর খেতে হবে। সুতরাং বলা যায় ক্লাস রি-ডিক্লেয়ার করা পসিবল না;
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


// তবে ক্লাস এক্সপ্রেশন এর মাধ্যমে রি-ডিকলেয়ার করা যাবে কিন্তু এটি ব্যবহার করা যাবে না 

let Person = class{
    first_name = "Sanowar"
    last_name = "Hossen"
    age = 30
    isBangladeshi = true
    city = "Dhaka"
    fullName(){
        console.log(`Full name is ${this.first_name} ${this.last_name}`);
    }
}

let Person = class{
    first_name = "Sanowar"
    last_name = "Hossen"
    age = 30
    isBangladeshi = true
    city = "Dhaka"
    fullName(){
        console.log(`Full name is ${this.first_name} ${this.last_name}`);
    }
}

const personOne = new Person();
console.log(personOne);