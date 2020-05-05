//we can add more properties in a object

let circle =
{
    radius:1,
    color:'red',
    log()
    {
        console.log('method inside object')
    }
}
console.log(circle)

//adding new properties to circle object

circle.price=10
circle.font='verdict'
console.log(circle)

//adding a new function in circle object
circle.erase=function(){
    console.log('erase circle method')
}

console.log(circle)


//delete a property from object

delete circle.price
console.log(circle)