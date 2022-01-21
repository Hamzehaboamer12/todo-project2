var userName = prompt("pleas, Enter your name?");
var  userGender = prompt("pleas, Enter your Gender?");
var  userAge = prompt("pleas, Enter Your Age?");

if (userAge <= 0){
    alert("Age must be more than 0");

}
var con =confirm("wants to skip the welcoming message");

var title ;
if(userGender === "male"){
    title = "Mr";
} else if(userGender === "femle"){
    title = "Ms";
} else {
    title = "";
}


alert("Hello " + title + " "+ userName);
