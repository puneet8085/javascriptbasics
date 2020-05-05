// factory function used to produce objects
// follow camel case notation

function createCircle(radius)
{
let circle= {
   radius: radius,
     c:  function draw()
{
    console.log('draw circle')
}

}
return circle
}


let c= createCircle(3)
console.log(c)
console.log(c.draw())
console.log(c.radius)
