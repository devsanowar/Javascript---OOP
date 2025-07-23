const student = {
    name : "Karim Mia",
    age : 25,
    class : 10,
    roll : 20,
    subjects : ['math', 'english', 'bangla'],
    address : {
        division : "dhaka",
        district : "tangail",
        upazila : "ghatail",
        union : "ghatail sadar",
        village : "kamla para"
    }
}

// console.log(student.address.division);
// console.log(student.address.district);
// console.log(student.address.upazila);
// console.log(student.address.union);
// console.log(student.address.village);


document.querySelector('#obj-example').textContent = ` Address = \n Village : ${student['address']['village']} \n Upazila : ${student['address']['upazila']} \n District : ${student['address']['district']} \n Division : ${student['address']['division']} \n \n Subjects = \n ${student.subjects[0]} \n ${student.subjects[1]} \n ${student.subjects[2]}`;
