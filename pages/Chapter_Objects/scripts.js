const person={
    name:'Asif',
    birthYear:1988,
    job:'Software engineer',
    friends:['MubarakcalcAge()Nadeem','Javed','Shahid','Afzal'],
    //create methocalcAge()   
    calcAge:function()
    {
        //craete a new property age
        this.age=2025-this.birthYear;
        return this.age;
    },
    getSummary:function(){
        return `${this.name} is a ${this.calcAge()} year old ${this.job}`;    
    }
};

console.log(person);

//object name is person and keys are name,age,job & friends, values are respective to properties.

//get data from object in two forms dot. and brackets[]

console.log(person.name);

console.log(person['name']);

//challenge
//get count of friends and best friend is mubarak from the object

console.log(`${person.name} has total ${person.friends.length} and his best friend is ${person.friends[0]}`);

//call function in the object
console.log(person.calcAge());

console.log(person.age);

//get summary about the profile
console.log(person.getSummary());