// var English = prompt("Total Marks Of English");
// var Maths = prompt("Total Marks Of Maths");
// var Urdu = prompt("Total Marks Of Urdu");
// var Isl = prompt("Total Marks Of Isl");
// var Computer = prompt("Total Marks Of Computer Science");
// console.log(English);
// console.log(Maths);
// console.log(Urdu);
// console.log(Isl);
// console.log(Computer);

// var officer = " Availabe"

// if (officer == "Availabe"){
//     console.log("Document Submitted");
// }else{
//     console.log("Not Availabe");
// // }
// var age = prompt("Enter Your Age");
// var studentcard = false

// if (age > 18){
//     console.log("Studen Allow");
// }else if(studentcard == true){
//     console.log("student Allow on student card");
// }else{
//     console.log("student not allow")
// // }
var english = +prompt("Total Marks Of English");
var maths = +prompt("Total Marks Of Maths");
var urdu = +prompt("Total Marks Of Urdu");
var isl = +prompt("Total Marks Of Isl");
var computer = +prompt("Total Marks Of Computer Science");
var totalmarks = english + maths + urdu + isl + computer;
var percentage = totalmarks/500 *100;
console.log(percentage);


if(percentage >=80){
    console.log("your grad is A-1")
} else if(percentage >=70){
    console.log("your grad is A")
}
else if(percentage >=60){
console.log("your grad is B")
}
else if(percentage >=50){
    console.log("your grad is C")
}
else if(percentage >=40){
    console.log("your grad is D")
}
else if(percentage >=33){
    console.log("Promotted")
}
else {
    console.log("Fail");
}




