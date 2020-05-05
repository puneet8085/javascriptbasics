// 3types of function ( regular function, anonoymus and arrow function)

//declaration of a regular function without param
function getName()
{
    console.log('name output is David')
}

//calling of a regular method
getName()

//declaration of a regular function with param
function addInteger(a,b){
    console.log('output of this method is '+ (a+b))
}

addInteger(5,8)
addInteger(5)  //output will be NAN as second param is not defined
addInteger()   //output will be NAN as no param value define

//declare regular function with return statement
function multiply(a,b)
{
    return a*b
}

//calling regular funcion having return statement
 let value =multiply(5,6)
 console.log(value)
 console.log("output of this function is :"  +multiply(5,9))