var userName = prompt("pleas, Enter your name?");
var userGender = prompt("pleas, Enter your Gender?");
var userAge = prompt("pleas, Enter Your Age?");

if (userAge <= 0) {
    alert("Age must be more than 0");

}


var con = confirm("wants to skip the welcoming message");
if (con === false) {
    var title;
    if (userGender === "male") {
        title = "Mr";
    } else if (userGender === "femle") {
        title = "Ms";
    } else {
        title = "";
    }


    alert("Hello " + title + " " + userName);
}


var arrayResult = [];
var questionOne = prompt(" Do you like Bananas?");

function checkFirstq(questionOne) {
    while (questionOne !== "yes" && questionOne !== "no" && questionOne !== " ") {
        questionOne = prompt("Do you like Bananas? 'Hint : Please Answer yes or no only or Checked must be valid Answer'");
    }

    arrayResult.unshift(questionOne);

}
checkFirstq(questionOne);


var questionTwo = prompt(" Do you like Apples?");

function checkSecondq(questionTwo) {
    while (questionTwo !== "yes" && questionTwo !== "no" && questionTwo !== " ") {
        questionTwo = prompt("Do you like Apples? 'Hint : Please Answer yes or no only or Checked must be valid Answer'");;
    }
    arrayResult.unshift(questionTwo);


}
checkSecondq(questionTwo);
var questionThere = prompt(" Do you like Pineapple?");

function checkThirdq(questionThere) {
    while (questionThere !== "yes" && questionThere !== "no" && questionThere !== " ") {
        questionThere = prompt("Do you like Pineapple? 'Hint : Please Answer yes or no only or Checked must be valid Answer'");
    }
    arrayResult.unshift(questionThere);


}


checkThirdq(questionThere);

console.log(arrayResult[0]);
console.log(arrayResult[1]);
console.log(arrayResult[2]);