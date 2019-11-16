function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь

    let now = new Date().getTime();
    
    let birthdayMSeconds = new Date(birthday).getTime();
    
    let diff  = now - birthdayMSeconds;
    
    let age = diff / 1000 / 60 / 60 / 24 / 365.25;
    
    if (age > 18) {

    return age;
   } 
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
    let sound = animal.sound;
    if (typeof(animal) == 'undefined') {
        return 'null';
    } else {
        return sound;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь
    console.log(typeof(marks));
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
       sum += Number(marks[i]);
   
}
    let average = sum / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;

}

