//clone one object properties to another object
let circle ={
    radius:1,
    draw(){console.log('--------------draw a circle----------------')}
}
//1. using spread (...) method

let obj={
    price:100,
    ...circle
}
console.log(obj)
console.log('assign values using spread method')


console.log('--------------------------------------')
//2. using object.assign method
 let another1=Object.assign({},circle)  //blank object
console.log(another1)

console.log('------------------------------------------')
let another2=Object.assign({color:'red'},circle)  //object with self properties
console.log(another2)

console.log('------------------------------------------')
//3. using for In loop
let another={}

for(let key in circle)
{
 another[key]=circle[key]
}
console.log(another)
