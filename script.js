'use strict'


var num = 50;

if(num < 49){
    console.log("Не верно!");
}else if (num > 100) {
    console.log("Много!");
}else {
    console.log("Верно!");
};

(num == 50) ? console.log("Верно!") : console.log("Не верно!");

switch(num){
    case num < 49:
        console.log("Не верно!");
        break;
    case num > 100:
        console.log("Много!");
        break;
    case num > 80:
        console.log("Много!");
        break;
    case 50:
        console.log("Ага!");
        break;

    default:
        console.log("Что-то пошло не так!");
        break;
}

var num = 50;
// while ( num <= 55) {
//     console.log(num);
//     num++;
// }

// do{
//     console.log(num);
//     num++;
// }
// while(num <= 55)

// for(var i = 1; i <= 8; i++){
    
//     if (i%2==0){
//         continue;
//     }
//     console.log(i);
// }

function showMessage(text){
    alert(text);
}