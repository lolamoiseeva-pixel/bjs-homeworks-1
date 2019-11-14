"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let D = Math.pow(b,2) - 4 * a * c;
    let x = [];
  
  if (D < 0) {
    return x;
  }
   
  else if (D === 0) {

    x.push(-b / 2* a);
    return x;

  } else {

    x.push((-b+Math.sqrt(D))/2*a);
    x.push((-b-Math.sqrt(D))/2*a);
    
    return x;
  }
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    if (marks.length > 5) {
            console.log("Необходимо уменьшить кол-во оценок до 5");
            marks.splice(5, marks.length - 5);
    }

    let sum = 0;

        for (let i = 0; i < marks.length; i++) {
        
            sum += marks[i];
        }
      
        let averageMark = sum / marks.length;
    return getAverageMark;
    
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
    let date1 = new Date();
    
    let date2 = new Date(dateOfBirth);

    let age = date1.getFullYear()  - date2.getFullYear();

    let result;


    if ((date1.getMonth()  - date2.getMonth()) < 0 || (date1.getMonth - date2.getMonth()) === 0
        && date1.getDay() < date2.getDay()) {
        age--;
    }
    
    if (age > 18){

        result = "Не желаете ли олд-фэшн," + name +"?"
        
    
    } else {

        result = "Сожалею," + name + ", но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!"

    }
    console.log(result);
    return result;

}



    