//logical operator ( And &&, OR || and Not !)

// AND operator

console.log(true&&true)
console.log(true&&false)
console.log(false&&true)
console.log(false&&false)

//OR operator

console.log(true||true)
console.log(true||false)
console.log(false||true)
console.log(false||false)

// Not operator
let status =false
console.log(!status)
console.log(!10>5)


//logical operator with non boolean value

//falsy values (undefined/null/0/false/''/NaN)

console.log(false|| undefined)

//truthy values ("string"/)
console.log(false||"puneet")
console.log(false||1)
Console.log(false||1||2)  //output will be 1 as when one condition come true in || it terminates and not check further
