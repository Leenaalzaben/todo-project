var gender, male, female;
// 1. To Ask the user to enter Name as Input.
var userName = prompt("What is your Name ?");
console.log(userName);



// 2.  To Ask the user to enter Gender as Input.

var gender = prompt("What is your Gender?");
if (gender == "male") {
    console.log("male");

} else if (gender == "female") {
    console.log("female");

}



// 3.To Ask the user to Enter Age as Input.
var userAge = prompt("What is your Age?");
if (userAge > 0) {
    console.log(userAge);
} else if (userAge <= 0) {
    alert('Warning, Age can not be less than Zero');
}



// 4. Ask the user to confirm if he wants to skip the welcoming message.
var userAnswer;
userAnswer = confirm('Do you want to SKIP this massage!');
console.log(userAnswer);



// 5. Alert a welcoming message with the name of the user 
//and the title Mr if the user is male and Ms if the user is female,
// and if the gender input is not correct alert the welcoming message without the title
// according to the confirmation.
var name = prompt("Please enter your Name", "Type Here");
var gender = prompt("Please enter your gender", "Type Here");

if (gender == 'male') {
    alert("Welcome, MR. " + name);

}
else if (gender == 'female') {
    alert("Welcome, MS. " + name);

} else {
    alert(" Unknown gender ");
}