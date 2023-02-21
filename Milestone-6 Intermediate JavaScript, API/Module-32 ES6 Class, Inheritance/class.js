class TeamMember{
    name;
    location;
    constructor(naam, thikana){
        this.name = naam;
        this.location = thikana;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }
}

class Instructor extends TeamMember{
    designation = "Web course instructor"
    team = 'web team'
    constructor(naam, thikana){
        super(naam, thikana);
    }
    startSupportSession(time){
        console.log(`Start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`);
    }
}


class Developer extends TeamMember{
    designation = "Web Developer"
    team = 'web team'
    tech;
    constructor(naam, thikana, tech){
        super(naam, thikana);
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`Please develop the ${feature}`);
    }
    release(version){
        console.log(`Please release the version ${version}`);
    }
}

const amir = new Instructor('Amir', 'Uttara');
console.log(amir);

const alia = new Developer('Alia', 'Mirpur', 'React');
console.log(alia);

amir.createQuiz(15);

alia.provideFeedback();
