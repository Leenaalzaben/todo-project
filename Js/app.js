var gender, male, female;
// 1. To Ask the user to enter Name as Input.
var userName = prompt("What is your Name  ?");
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
// 5. Alert a welcoming message with the name of the user


var userAnswer = confirm("Do you want to skip the welcoming message?");


if (userAnswer == true) {
    userAnswer = console.log("User wants to skip the welcoming message.");
} else {
    // var name = prompt("Please enter your Name");

    if (gender == 'male') {
        alert("Welcome, MR. " + userName);

    }
    else if (gender == 'female') {
        alert("Welcome, MS. " + userName);
    } else {
        alert(" Unknown ");
    }

}

//---------------------------------------- Lab_06 -----------------------------------------------------
//_____________________________________________________________________________________________________

// 1. Add new three Yes / No question 

//---------------------1st Q----------------
//__________________________________________
let userNewAnswer = [];

let age = prompt("Are you over 18 years old? (Yes/No)");
function checkAge(age) {
   if(age==""){
    userNewAnswer.push("Invalid");

   } else{
    userNewAnswer.push(age);
    
   }

}
checkAge(age);



//-------------------2nd Q------------------
//__________________________________________

let answerTwo = prompt("Do you like pizza? (Yes/No)")
function pizzaAnswer(answerTwo) {
    if(answerTwo==""){

        userNewAnswer.push("Invalid");
    }else{
    userNewAnswer.push(answerTwo);
   
    }
}
pizzaAnswer(answerTwo);


//-------------------3nd Q------------------
//__________________________________________

let answerThree = prompt("Have you ever been skydiving? (Yes/No)")
function skyDivingAnswer(answerThree) {
    
    if(answerThree==""){
        userNewAnswer.push("Invalid");

    } else{
    userNewAnswer.push(answerThree);
    }
}
skyDivingAnswer(answerThree);




//-------------------Array-----------------------
//_______________________________________________
// We want to insert the inputs in loop

for (var i = 0; i < userNewAnswer.length; i++) {
    
        
    
    console.log(userNewAnswer[i]);
    

}
console.log(userNewAnswer);










