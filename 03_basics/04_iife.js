// immediately invoked function expressions (IIFE)

// function chai(){
//     console.log(`db connected`);
// }
// chai()

// named IIFE
(function chai(){
    console.log(`db connected`);
})();

((name)=>{
    console.log(`db connected 2 by ${name}`);
    
})('arnav')
