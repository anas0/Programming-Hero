const user = {
    id: 1,
    name: "Bismi",
    job: 'Student'
};

const stringfied = JSON.stringify(user);

console.log(user);
console.log(stringfied);

const userObject = JSON.parse(stringfied);
console.log(userObject);
