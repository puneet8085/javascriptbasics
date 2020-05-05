//bitwiese operator
// 00000000 means 0  and 00000001 means 1 and 00000010 means 2

console.log(1 | 2)  //ouput will be 3 as | will place 1 if 1 is place at any point
console.log(1&2) //output will be zero
// 00000001
// 00000010
// 00000011   using |
// 00000000  using &  if 1 is not present on both at same index then it will be zero



//operator precedence
console.log(2+3*4)  //output will be 14 as first * will be done
console.log((2+3)*4) //outut will be 20 as first () value will be added

//swap 2 values

let a=10
let b=20

let c=a
    a=b
    b=c
console.log(a)
console.log(b)
