// Homework 1


// const refs = {
//     login : 'admin',
//     pass : 'm4ngo1zh4ackz0r'
// }


// let login = prompt('Enter your login: ');
// if(login === null) {
//     alert('Canceled by user!')
// } else if (login === refs.login) {
//     let pass = prompt('Enter yout pass: ');
//     if(pass === null) {
//         alert('Canceled by user!');
//     } else if (pass === refs.pass) {
//         alert('Access allowed');
//     } else {
//         alert('Access denied');
//     }
// } else {
//     alert('Login is incorrect!!!');
// }






// Homework 2


// const refs = {
//     userinput : '',
//     numbers : [],
//     total : 0
// }

// const func = () => {
// let input;
//     do {
//         input = prompt('Enter your value');
//         refs.numbers.push(input);
//     } while (input);
//     refs.numbers.pop();
//     refs.total = refs.numbers.reduce((acc, val) => acc + Number(val), 0);
//     alert(`Your total is: ${refs.total}`)
// } 

// func();





// Homework 3

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];


// let login = '';


// const validation = () => {
//     if(login.length >= 4 && login.length <= 16 ) {
//         return true;
//     } else {
//         alert('Invalid!')
//         return false;
//     }
// }


// const unic = () => {
//     if(logins.includes(login)) {
//         alert('Already exists!')
//         return true;
//     } else {
//        return false; 
//     }
// }

// const addLogin = () => {
//     login = prompt('Enter login: ');
//     if(validation() === true && unic() === false) {
//         logins.push(login);
//     }
//     console.log(logins)
// } 

// addLogin()





// Homework 4

// const products = {
//     bread: 10,
//     milk: 15,
//     apples: 20,
//     chicken: 50,
//     cheese: 40,
// };

// const order = {
//     bread: 2,
//     milk: 2,
//     apples: 1,
//     cheese: 1
//   };


// function Cashier (name, productDatabase) {
//     this.name = name;
//     this.productDatabase = productDatabase;
//     this.customerMoney = 0;

//     this.getCustomerMoney = function() {

//         return this.customerMoney = prompt('Enter your money amount: ')
//     }

//     this.countTotalPrice = function(order) {
//         let sum = 0;
//         let total = 0;

//         const productsArr = Object.entries(this.productDatabase);
//         const orderArr = Object.entries(order);

//         for (let prod of orderArr) {
//             for (let ord of productsArr) {
//                 if (ord[0] === prod[0]) {
//                     sum = ord[1] * prod[1];
//                 }
//             }  
//             total += sum
//         } 
//         return total;
//     }

//     this.countChange = function () {
//       let change = 0;
//       if(totalPrice < this.customerMoney) {
//         change = this.customerMoney - totalPrice;
//         return change;
//       } else {
//         return null;
//       }
//     }

//     this.onSuccess = function () {
//       alert(`Your change is ${change}`);
//     }

//     this.onError = function () {
//       alert(`You don't have enought money!`);
//     }

//     this.reset = function () {
//       this.customerMoney = 0;
//     }

// }

// const mango = new Cashier('Mango', products);
// console.log(mango.name); // Mango
// console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
// console.log(mango.customerMoney); // 0

// // Вызываем метод countTotalPrice для подсчета общей суммы
// // передавая order - список покупок пользователя
// const totalPrice = mango.countTotalPrice(order);

// // Проверям что посчитали
// console.log(totalPrice); // 110

// // Вызываем getCustomerMoney для запроса денег покупателя
// mango.getCustomerMoney(300);

// // Проверяем что в поле с деньгами пользователя
// console.log(mango.customerMoney); // 300

// // Вызываем countChange для подсчета сдачи
// const change = mango.countChange();

// // Проверяем что нам вернул countChange
// console.log(change); // 190

// // Проверяем результат подсчета денег
// if(change !== null) {
//   //  При успешном обслуживании вызываем метод onSuccess
//   mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
// } else {
//   // При неудачном обслуживании вызываем метод onError   
//   mango.onError(); // Очень жаль, вам не хватает денег на покупки
// }

// // Вызываем reset при любом исходе обслуживания
// mango.reset();

// // Проверяем значения после reset
// console.log(mango.customerMoney); // 0



/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
    // name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };
  
//   user.mood = 'Happy';
//   user.hobby = 'JS';
//   delete(user.premium);


// // const keys = Object.keys(user);
// //  for (key of keys) {
// //      console.log(key, user[key])
// //  }

// const arr = Object.entries(user);


// for (key of arr) {
//     let keyz = key[0];
//     let val = key[1];
//     console.log(`${keyz}: ${val}`)
// }




/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   };

  

//   const arr = Object.entries(tasksCompleted);
//   let sum = 0;
//   let winner = '';

//   for(obj of arr) {
//     //   console.log(obj);
//       const key = obj[0];
//       const val = obj[1];
//         if(val > sum) {            
//             sum = val;
//             winner = key;
//         }
//   }
// console.log(winner);



/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки
// console.log(
//     countProps({})
//   ); // 0
  
//   console.log(
//     countProps({a: 1, b: 3, c: 'hello'})
//   ); // 3

//   const countProps = function (obj) {
//     const keys = Object.keys(obj);
//     const amount = keys.length;
//     return amount;

// //   }

//   console.log(
        // countProps({a: 1, b: 3, c: 'hello'})
    //   ); // 3




    /*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// Вызовы функции для проверки
  
//   const isObjectEmpty = function (obj) {
//         const keys = Object.keys(obj);
//         const amount = keys.length;
//         if (amount > 0) {
//             return false;
//         } else {
//             return true;
//         }
//       }


//       console.log(
//         isObjectEmpty({})
//       ); // true
      
//       console.log(
//         isObjectEmpty({a: 1})
//       ); // false
      
//       console.log(
//         isObjectEmpty({a: 1, b: 2})
//       ); // false





//   const countTotalSalary = function (obj) {
//     let sum = 0;
//     const values = Object.values(obj);
//       for (val of values) {
//           sum += val;
//       }
//       return(sum);
//   }

//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80
//     })
//   ); // 330


  /*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
//   ];

// const getAllPropValues = function(arr, key) {
//     const array = [];

//     for (val of arr) {
//         console.log(val)
//         if (val.hasOwnProperty(key)) {
//             array.push(val[key])
//         }
//     }
//     return array;
// }



  
//   // Вызовы функции для проверки
//   console.log(
//     getAllPropValues(users, 'name') // ['Poly', 'Mango', 'Ajax']
//   );
// //   console.log(
    // getAllPropValues(users, 'mood')
//   ); // ['happy', 'blissful', 'tired']
  
//   console.log(
//     getAllPropValues(users, 'active')
//   ); // []



/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  необходимо передать как аргументы 
  при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/

// function User (name, isActive, age, friends) {
//     this.name = name;
//     this.isActive = isActive;
//     this.age = age;
//     this.friends = friends;
//     this.getUserInfo = function () {
//         console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`);
//     }
// }


// const mango = new User('Mango', true, 18, 14 )
// mango.getUserInfo();




/*  
  Расставьте отсутствующие this 
  в методах объекта store
*/

// const store = {
//   products: ['bread', 'cheese', 'milk', 'apples'],
//   managers: ['poly', 'mango', 'ajax'],
//   addManager(manager) {
//     this.managers.push(manager);
    
//     console.log(this.managers);
//   },
//   removeManager(manager) {
//     const idx = this.managers.indexOf(manager);
    
//     this.managers.splice(idx, 1);
    
//     console.log(this.managers);
//   },
//   getProducts() {
//     console.log(this.products);
    
//     return this.products;
//   }
// }

// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

// store.removeManager('mango'); // ['poly', ajax', 'chelsey']

// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']




/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

// function Account({ login, password, type = "regular" }) {
//     this.login = login;
//     this.password = password;
//     this.type = type;
  
//     this.changePassword = function(newPassword) {
//       this.password = newPassword;
  
//       return (this.password);
//     };
  
//     this.getAccountInfo = function() {
//       return(`
//         Login: ${this.login}, 
//         Pass: ${this.password}, 
//         Type: ${this.type}
//       `);
//     };
//   }
  
//   const account = new Account({
//     login: "Mango",
//     password: "qwe123",
//     type: "premium"
//   });
  
//   console.log(account.login); // 'Mango'
//   console.log(account.password); // 'qwe123'
//   console.log(account.type); // 'premium'
  
//   console.log(account.changePassword("asdzxc")); // 'asdzxc'
  
//   console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
  





//   /*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

// /* 
//   Функция findGreaterThan получает два аргумента - число и массив.
//   Возвращает новый массив, содержащий элементы которые больше числа.
// */
// const findGreaterThan = (num, arr) => {
//   const result = arr.filter(val => val > num);
//   return result;
// }


// console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
// console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
// console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]

// /* 
//   Функция multiplyBy принимает два аргумента - число и массив. 
//   Возвращает массив все значения которого умножены на число.
// */

// const multiplyBy = (num, arr) => {
//   const result = arr.map(val => num * val);
//   return result; 
// }


// console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
// console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
// console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]

// /* 
//   Функция summAllNumbers принимает любое число аргументов.
//   Возвращает число - сумму всех аргументов.
// */

// const summAllNumbers = (...args) => args.reduce((acc, x) => acc + x, 0);
// // function summAllNumbers(...args) {
// //   let accumulator = 0;

// //   for (let i = 0, max = args.length; i < max; i += 1) {
// //     accumulator += args[i];
// //   }

// //   return accumulator;
// // }

// console.log( summAllNumbers(1, 2, 3) ); // 6
// console.log( summAllNumbers(1, 2, 3, 4) ); // 10
// console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15

// /* 
//   Функция findEvery получает два аргумента - число и массив.
//   Возвращает true если все элементы массива больше или равны числу.
//   Иначе если есть хоть один элемент меньше числа, то возвращается false.
// */
// // const findEvery = (num, arr) => {
// //   for (let i = 0, max = arr.length; i < max; i += 1) {
// //     if (arr[i] < num) {
// //       return false;
// //     }
// //   }

// //   return true;
// // };


// const findEvery = (num, arr) => arr.every(val => val >= num);


// console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
// console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
// console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true





/*
  Напишите функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

const guests = [
  { name: "Mango", age: 20, isActive: true },
  { name: "Poly", age: 18, isActive: false },
  { name: "Ajax", age: 30, isActive: true },
  { name: "Chelsey", age: 45, isActive: false }
];

const getPropValues = (arr) => {
  const array = arr.forEach(element => {
    element
  });
  return array;
} 

// Вызовы функции для проверки
console.log(getPropValues(guests)); // ['Mango', 'Poly', 'Ajax', 'Chelsey']

// console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]

// console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]


















// http 1.1
// http 2.0
// cookies
// какой оператор что возвращает
// Что покажет консоль лог
// псевдомассивы
// области видимости
// lexical environment
// контест выполнения
// bind call apply
// Promise