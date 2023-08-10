//Pseudocode 
// 1. First input;let user input birth year
// 2. Second input; Let user imput current year
// 3. To get the users' age do birth year minus current year
// 4. Set the returned answer to be age 
// 5. Let the function return user age



let birthyear = parseInt(prompt("Enter birth year"));
let currentyear = parseInt(prompt("Enter Current year"));
let age;
function userAge(){
    userAge= birthyear-currentyear
}
console.log(userAge());

//create an array of numbers
let input = 45;
const arrayNumbers = [1,2,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];

//Loop through the array and output only even numbers
for (let i = 0; i < arrayNumbers.length; i++){
    if (i % 2 === 0){
    console.log(i);
    }
} 

