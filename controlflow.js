
//switch case statement
let role ='admin'
switch(role)
{
    case 'admin':
    console.log('role is admin')
    break

    case 'guest':
    console.log('role is guest')
    break

    default :
    console.log('no role matched')
    break
}
//if else syntex

let hour =hours(9)

function hours(h){
    console.log(h)
    return h
}



if(hour>=6 && hour<12)
{
console.log("----------------Good Morning-------------")
}
else if(hour>=12 && hour<18)
{
console.log('----------------Good Afternoon--------------')
}
else
{
console.log('--------------Good Night---------------------')
}




