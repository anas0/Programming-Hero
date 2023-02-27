const student = {
    name: 'Biami',
    money: 10000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        console.log(this.name, 'is participating in an exam');
    }
}

student.exam();