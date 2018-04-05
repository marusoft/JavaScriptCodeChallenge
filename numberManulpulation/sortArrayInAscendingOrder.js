/*
* sort array greater than 70
* in ascending order
* filter and compare values
*/
let myArray = [3, 62, 234, 7, 23, 74, 23, 76, 92];
let newArr = myArray.filter(filtered => filtered > 70).sort((a, b) => (a - b));
myArray.sort();

console.log(newArr);
