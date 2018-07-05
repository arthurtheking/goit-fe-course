'Use strict'
// Task 1

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// console.log(users.length); // 4

// console.log(users[0]); // Poly
// console.log(users[1]); // Chelsey
// console.log(users[2]); // Mango
// console.log(users[3]); // Ajax

// Task 2

/* Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// /* Используя методы массива, последовательно выполнить следующие операции */
// users.shift();
// // Удалить из начала массива нулевой элемент
// console.log(users); // ["Poly", "Ajax", "Chelsey"]
// users.pop();
// // Удалить из конца массив последний элемент
// console.log(users); // ["Poly", "Ajax"]
// users.unshift('Arthur');
// // Добавить в начало массива любое имя
// console.log(users); // ["добавленое имя", "Poly", "Ajax"]
// users.push('Anton', 'Maxim');
// // Добавить в конец массива два любых имени за одну операцию
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]

// Task 3

/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

// let string = prompt('Введите предложение');
// let arr = string.split(' ');

// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// console.log(arr);

// // Вывести в консоли общую длину массива arr
// console.log( arr.length);

// // Используя цикл, вывести в консоль все индексы массива arr
// for (let i = 0; i < arr.length; i +=1){
//   console.log(i);
// }

// // Используя цикл, вывести в консоль все элементы массива arr
// for (let i = 0; i < arr.length; i +=1){
//   console.log(arr[i]);
// }

// // Используя цикл, bывести в консоли все пары индекс:значение массива arr
// for (let i = 0; i < arr.length; i +=1){
//   console.log(i + arr[i]);
// }

// Task 4

/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
  либо не нажмёт кнопку Cancel.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/
// let i = prompt('Введите число больше 100');

// if (i < 100) {
//   do {
//   i = Number(prompt('Введите число больше 100') );
//   } while (i <= 100);
//   if (i > 100) {
//     alert('Вы восхитительны!');
//   };
// } else {
//     alert('Вы восхитительны!');
// };

// Task 6 

/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for (let i of numbers) {
//   if ( i > num){
//   newArray.push(i);
//   }
// }

// console.log(newArray);

// Task 7 

// Homework Task 1

// let userInput;
// const numbers = [userInput += 1];
// let total = 0;


// do {
//   userInput = prompt('Введите число');
//   numbers.push(parseInt(userInput));

// } while ( userInput !== null );
// numbers.pop();

// console.log(numbers);

// for ( i=1; i<numbers.length; i++ ) {
//   total = total + numbers[i];
// }

// console.log(total);



