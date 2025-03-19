let score = "123"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber =Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "123" => 123
// "123abc" => NaN   ;it will show that it is converted to number but its walue will be NaN
// true => 1;false => 0
//  null => 0
// undefined => NaN


let isLoggedIn= "abc"

let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
// 1=>true;0=>false 
// ""=>false ; "abc"=>true
 

let someNumber=123

let stringNumber=String(someNumber)
console.log(typeof stringNumber);  // string
