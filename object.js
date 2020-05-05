//how to define a object
let person //object name
={
    //object properties
   work: 'tester', 
   age:30,
   name:'puneet',
   salary: 30000
};
//priniting object
console.log(person)

//how to access properties of an object
//1. using dot notation
console.log(person.work)
person.work='developer'
console.log(person.work)

//using bracket notaion
console.log(person['name'])
person['salary']=100
console.log(person['salary'])