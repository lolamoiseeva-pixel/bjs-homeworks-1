"use strict";

console.log("Task 1");

function getResult(a, b, c) {
  
  let D = Math.pow(b,2) - 4 * a * c;
  let arr = [];
  
  if (D < 0) {
    return arr;
  }
   
  else if (D === 0) {

    arr.push(-b / 2* a);
    return arr;

} else {

  arr.push((-b+Math.sqrt(D))/2*a);
  arr.push((-b-Math.sqrt(D))/2*a);
    
    return arr;
  }
}
 getResult(2, 4, -3);



 console.log("Task 2");

 function getAverageMark(marks) {
        
        if (marks.length > 5) {
            console.log("Необходимо уменьшить кол-во оценок до 5");
            marks.splice(5, marks.length - 5);
        }

    let sum = 0;

        for (let i = 0; i < marks.length; i++) {
        
            sum += marks[i];
        }
      
        let averageMark = sum / marks.length;
        console.log(averageMark);
    }



    let marksList = prompt("Введите оценки через запятую");
    let marks = JSON.parse("[" + marksList + "]");
   

    getAverageMark(marks);

console.log("Task 3");

function askDrink(name, dateOfBirth) {

    let date1 = new Date();
    
    let date2 = new Date(dateOfBirth);

    let age = date1.getFullYear()  - date2.getFullYear();


    if ((date1.getMonth()  - date2.getMonth()) < 0 || (date1.getMonth - date2.getMonth()) === 0
        && date1.getDay() < date2.getDay()) {
        age--;
    }
    
    if (age > 18){
        console.log("Не желаете ли олд-фэшн," + name +"?");
    
    } else {

        console.log("Сожалею," + name + ", но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!");
    }

}

let name = prompt("Введите Ваше имя");
let dateOfBirth = prompt("Ваша дата рождения в формате ММ-ДД-ГГГ?");


askDrink(name, dateOfBirth);