// getting list of properties of an object.

//object with 2 properties 
let circle={
    radius:1,
    draw(){
        console.log('draw a circle')
    }
}
//1. using for In loop

for (let key in circle)
{
    console.log(key, circle[key])
}
console.log('-----------------------------------------')
//2. using for of loop( its return type is array so to iterate  a object we need to use objects.key and object.entries method)
for( let key of Object.keys(circle))
{
    console.log(key)  //this will give details of all prorties of object
}

console.log('-----------------------------------------')
for(let entries of Object.entries(circle))
{
    console.log(entries)// this will give value of properties
}

console.log('-----------------------------------------')

//3. using In method
if('radius' in circle)
{
    console.log('radius is present in object circle')
}
console.log('-----------------------------------------')

console.log('-----------------------------------------')

if('draw' in circle)
{
    console.log('draw is present in object circle')
}