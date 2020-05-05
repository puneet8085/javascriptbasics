// constructor function used to produce object similar to factory function
// use pascal notation i.e every first letter will be caps
// use new keyword for memory allocation

function Circle(radius)
{
    this.radius=radius,
    this.draw= function()
    {
        console.log('draw circle')
    }

}

let c=new Circle(5)
console.log(c.radius)
console.log(c)
console.log(c.draw())
c.draw()
