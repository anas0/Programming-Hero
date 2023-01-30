var student = {
    id: 7,
    name: 'Zunayed Abedin',
    class: 10,
    markes: 98
}

console.log(student);
console.log(student.name);

student.name = "Jone Sina";
console.log(student);

var mark = student['markes'];
console.log(mark);

var keys = Object.keys(student);
console.log(keys);

var values = Object.values(student);
console.log(values);

for(var i=0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = student[propertyName];
    console.log(propertyName, propertyValue);
}

// For in loop
for(var propertyName in student){
    var propertyValue = student[propertyName];
    console.log(propertyName, propertyValue);
}

var a = Object.entries(student);
console.log(a);