/*
* sort array greater than 70
* unorderly manner
*/
let myArray = [3, 62, 234, 7, 23, 74, 23, 76, 92];
let newArr = myArray.filter(filtered => filtered > 70);
myArray.sort();

console.log(newArr);