const marvel_heroes=["spiderman","ironman","hulk"];
const dc_heroes=["supeman","batman","flash"];

/* 1. push to combine array
marvel_heroes.push(dc_heroes);
 console.log(marvel_heroes)
output =>[ 'spiderman', 'ironman', 'hulk', [ 'supeman', 'batman', 'flash' ] ]
*/

/* 2. concat to merge two array 
const all_heroes=marvel_heroes.concat(dc_heroes)
console.log(all_heroes)
*/

/* 3. spread operator to add two arrays
const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);
*/

/* 4. to concat nested arrays
const arr=[1,2,3,4,[5,6,7],8,9,[1,2,3,45,[5,6,7,8]]]
const newarr=arr.flat(1);   //flat(dept till which u need to conct array elements),depth can be 1,2,3...,or infinity 
console.log(newarr);
*/

const arr='arnav';
console.log(Array.from(arr));

const s1=100;
const s2=200;
const s3=300;
console.log(Array.of(s1,s2,s3));


