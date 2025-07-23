// Student profile
const student = {
    name : "Md Sanowar Hossen",
    age : 30,
    grade : 3.22,
    subjects :['Math', 'English', 'Data Structure'],
    isPassed : true
}

// textContent ব্যবহার করলে নিউ লাইনের জন্য HTML ট্যাগ pre হতে হবে
// যদি div or p tag থাকে তাহলে innerHTML এর মাধ্যমে করতে হবে

let result = document.querySelector('#obj-example').textContent = ` Name is : ${student.name} \n Age is ${student.age} \n Grade is : ${student.grade} \n Subject : ${student.subjects} \n Pass : ${student.isPassed} `;
// result.textContent = student.subjects;
// result.textContent = student.subjects[2];
// result.textContent = student.name;
// result.textContent = student.grade;
// result.textContent = student.isPassed;
