'use strict';

console.log("Task 1");

function getSolutions(a, b, c) {

	let D = Math.pow(b,2) - 4 * a * c;

	if (D < 0) {
		return {
			'D': D
		}

	} else if (D ===0) {
		let x1 = -b / (2 * a);
		return {
			'roots' : [x1],
			'D' : 0
		}

	}	else {
  
		let x1  = (-b + Math.sqrt(D)) / (2 * a);
    console.log(x1);
		let x2 = (-b - Math.sqrt(D)) / (2 * a);

		return {
			'roots' : [x1, x2],
			'D' : D
		}
	}
}

function showSolutionsMessage(a, b, c) {

	let result = getSolutions(a,b,c);

	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);

	console.log("Значение дискриминанта: " + result['D']);
	
	if (result['D'] < 0) {
		console.log('Уравнение не имеет вещественных корней');

	} else if (result['D'] === 0) {
		console.log('Уравнение имеет один корень X1 = ' + result['roots']);

	} else {
		console.log ('Уравнение имеет два корня X1 = ' + result['roots'][0] + ' X2 = '+ result['roots'][1]);
	}
}

showSolutionsMessage(2,4,2);

console.log("Task 2");


function getAverageScore(data) {
  let sum = 0;
  let count = 0;
  let resultObject = {};
  
  for (let prop in data) {
    
    function propAverage(arr) {
      let sumProp = 0;
      for (let i = 0; i < arr.length; i++){
        sumProp += arr[i];
      }

      let resultAverage = sumProp / arr.length;
      
      return resultAverage;
    }

    resultObject[prop] = propAverage(data[prop]);
    sum += propAverage(data[prop]);
    count ++;
  }

let avg = sum / count;
resultObject['average'] = avg;
return resultObject;
}

console.log(getAverageScore({
  alg : [1,4],
  rus: [2,1],
  english: [1,4,5]
}));

console.log ('Task 3');


function getPersonData(secretData) {
  
  return {
    'firstName' :decodeFirstName(secretData),
    'secondName' : decodeSecondName(secretData)
  }
}


function decodeFirstName(secretData) {
  let keys;
  for(let key in secretData) {
    if(key === 'aaa' && secretData[key] === 0) {
      keys = 'Родриго';
    }else if(key === 'aaa' && secretData[key]=== 1) {
      keys = 'Эмильо';
    }
  }
  return keys;
}

function decodeSecondName(secretData) {
  let keys;
  for(let key in secretData) {
    if(key === 'bbb' && secretData[key]=== 0) {
      keys  = 'Родриго';
    } else if (key === 'bbb' && secretData[key] === 1) {
      keys = 'Эмильо';
    }
  }
  return keys;
}


console.log(getPersonData({
  aaa : 1,
  bbb : 0
}));