'Use strict'


// const plusTen = number => number + 10;

// const pow = (number, pow) => number ** pow;

// const f1 = () => {
//   console.log('f1');
// }

// const f2 = () => {
//   console.log('f2');
//   f1();
// }

// const f3 = () => {
//   console.log('f3');
//   f2();
// }

// f3();


// Task 1

/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки
// let number = prompt('Введите число для проверки: ');
// const checkNumberType = function(number) {
//   if (number % 2) {
//     alert('odd')
//   } else {
//     alert('even')
//   }
// }
// checkNumberType(number);


// console.log(checkNumberType);
// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'





// Task 2 


// Homework


let login;
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const checkLoginValidity = function(login) {
  if ( login.length <= 16 && login.length >= 4) {
    return true;
  } else{
   return false;
  }
}

const checkLoginExists = function(login) {
  if (logins.includes(login)) {
    return true;
  } else {
    return false;
  }
}


const addLogin = function(login) {
  
  checkLoginValidity(login);
  
  if (checkLoginValidity(login) === true ) {
   
    checkLoginExists(login);
        
    if (checkLoginExists(login) === false) {
        logins.push(login);
        alert('Ваш логин был успешно добавлен!!!');
      } else {
        alert('Такой логин уже существует!!!')
      }
 } else {
   alert('Ошибка! Логин должен быть от 4 до 16 символов!!!');
 }
}


 login = prompt('Введите логин: ')

addLogin(login);
console.log(logins);


