'Use strict'

// Task 1


// const checkNumberType = function(num) {
//   num % 2 === 0 ? console.log('Even') : console.log('Odd');
//  }
 
//  checkNumberType(14);
 

// Task 2 

// const strCutter = function(str) {
//   let array = str.split('');
 
//   if (array.length <= 40) {
//     console.log(str);
//   } else if (array.length > 40) {
//     let arr = array.slice(0, 40);
//     console.log(arr + '...');
//   }
// }

// strCutter('When we stand together');


// Task 3

// let str;
// const checkForSpam = function (str) {
//   if ( str.includes('sale') || str.includes('Sale') || str.includes('SALE') || str.includes('spam') || str.includes('SPAM') || str.includes('Spam')) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true


// Task 4

// const getPx = function(str) {
//   if (str !== String(str) ){
//     return null; 
//   } else {
//     return Number.parseInt(str); 
//   }
// }
  
// console.log(getPx(10));


// Task 5

// let longestWord = "";

// const findLongestWord = function( str ) {
//   let longestWord = "";
  
//   let arr = str.split(" ");
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > longestWord.length) {
//       longestWord = arr[i];
//     }
//    }
//     return longestWord;
//   }

// console.log(
//   findLongestWord("Google do a roll")); // вернет 'Google'


// Task 6

// const findLargestNumber = function (...num) {
//     let largestNumber = 0;
      
//       let arr = Array.from(arguments);
//       console.log(arr);
//       for (let i = 0; i < arr.length; i++) {
//           if ( arr[i] > largestNumber) {
//             largestNumber = arr[i];
//           }
//       }
//       console.log(largestNumber);
//     }
//     findLargestNumber(12, 13, 15, 322, 415, 12, 36);


// Task 7



// Homework


// let login;
// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const checkLoginValidity = function(login) {
//   if ( login.length <= 16 && login.length >= 4) {
//     return true;
//   } else{
//    return false;
//   }
// }

// const checkLoginExists = function(login) {
//   if (logins.includes(login)) {
//     return true;
//   } else {
//     return false;
//   }
// }


// const addLogin = function(login) {
  
//   checkLoginValidity(login);
  
//   if (checkLoginValidity(login) === true ) {
   
//     checkLoginExists(login);
        
//     if (checkLoginExists(login) === false) {
//         logins.push(login);
//         alert('Ваш логин был успешно добавлен!!!');
//       } else {
//         alert('Такой логин уже существует!!!')
//       }
//  } else {
//    alert('Ошибка! Логин должен быть от 4 до 16 символов!!!');
//  }
// }


//  login = prompt('Введите логин: ')

// addLogin(login);
// console.log(logins);




// const func = function() {

// }

// const printMessage = (callback) => {
//     const message = callback();
//     alert( message );
//   };

//   const getMessage = () => {
//       return "i love Tanya";
//   }
  

// printMessage(getMessage);