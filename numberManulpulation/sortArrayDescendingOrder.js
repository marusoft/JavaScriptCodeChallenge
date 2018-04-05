/*
* sort array greater than 70
* in descending order
*/
let myArray = [3, 62, 234, 7, 23, 74, 23, 76, 92];
let newArr = myArray.filter(filtered => filtered > 70).sort((a, b) => (b - a));
myArray.sort();

console.log(newArr);
