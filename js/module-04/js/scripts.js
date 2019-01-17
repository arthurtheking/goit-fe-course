'Use strict'


// Task 1

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = 'Happy';
// user.hobby = 'JavaScript';
// delete user.premium;

// console.log(user);


// for (values in user) {
//   console.log(values);
// }

// const arr = Object.keys(user);

// for (key of arr) {
//   console.log(user[key])
// }

// const keys = Object.entries(user);

// for ( entry of keys ) {
//   const key = entry[0];
//   const value = entry [1];

//   console.log(`${key}: ${value}`);
// }


// Task 2

/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
//   markus: 22
// };

// const tasksDone = Object.entries(tasksCompleted);
// let newValue = 0;
// let newKey = '';

// for (arr of tasksDone) {
//   const key = arr[0];
//   const value = arr[1];

//   if (value > newValue) {
//     newValue = value;
//     newKey = key;
//   }
// }
// console.log(`${newKey}: ${newValue}`)


// Task 3

/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки
// console.log(
//   countProps({})
// ); // 0

// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// ); // 3

// const ang = {
//   name: 'Misha',
//   age: 43,
//   weed: 'no'
// }

// const countProps = function(obj) {
//   const arr = Object.keys(obj);
//   return arr.length
  
// }

// console.log(countProps(ang));


// console.log(
//   countProps({a: 1, b: 3, c: 'hello', d: 12})
// ); // 3


// Task 4

/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// Вызовы функции для проверки
// console.log(
//   isObjectEmpty({})
// ); // true

// console.log(
//   isObjectEmpty({a: 1})
// ); // false

// console.log(
//   isObjectEmpty({a: 1, b: 2})
// ); // false

// const isObjectEmpty = function(obj) {
//   const objLength = Object.keys(obj);
//   const num = objLength.length;
//   if (num > 0) {
//     return false;
//   } else {
//     return true;
//   }
// }


// console.log(
//   isObjectEmpty({})
// ); // true

// console.log(
//   isObjectEmpty({a: 1})
// ); // false

// console.log(
//   isObjectEmpty({a: 1, b: 2})
// ); // false


// Task 5

/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

// Вызовы функции для проверки
// console.log(
//   countTotalSalary({})
// ); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330


// const countTotalSalary = (obj) => {
//   const value = Object.values(obj);
//   console.log(value)
//   let sum = 0;
//   for (let i = 0; i < value.length; i++ ) {
//     sum += value[i];
//   }
//   return sum;
// }

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//     bob: 5
//   })
// ); // 330


// Task 6

/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const getAllPropValues = (arr, prop) => {
  
// }




// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful'},
//   { name: 'Ajax', age: 3, mood: 'tired' }
// ];

// // Вызовы функции для проверки
// console.log(
//   getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']


// console.log(
//   getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']

// console.log(
//   getAllPropValues(users, 'active')
// ); // []


// const Manager = function (name = 'Manager', sales = 0) {
//   this.name = name,
//   this.sales = sales,
//   this.sell = function(product) {
//     this.sales += 1;
//     return `Manager ${name} sold ${product}. Now he sold ${this.sales} animals`
//   }
// }

// const max = new Manager('Max', 4);

// console.log(max.sales);
// console.log(max.sell('Cat'));
// console.log(max.sales);
// console.log(max.sell('Dog'))


// Homework

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

const Cashier = function (name, productDatabase) {
  this.name = name,
  this.productDatabase = productDatabase,
  this.customerMoney = 0,

  this.getCustomerMoney = function() {
    return this.customerMoney = prompt('Enter your cash:')
  }

  this.countTotalPrice = function(order) {
    let total = 0;
    let sum = 0;
    const productArr = Object.entries(this.productDatabase);
    const orderArr = Object.entries(order);

    for (let prod of orderArr) {
        for(let quant of productArr) {
            if (quant[0] === prod[0]){
              sum = quant[1] * prod[1]
            }
        }
        total += sum;
    }
    return total;
};

  this.countChange = function () {
    let change = 0;
    if (totalPrice <= this.customerMoney ) {
      change = this.customerMoney - totalPrice;
      return change;
      } else {
      return null;
      }
    }

  this.onSuccess = function (change) {
    return alert(`Спасибо за покупку, ваша сдача ${change}`);
  }

  this.onError = function () {
    return alert('Очень жаль, вам не хватает денег на покупки');

  }

  this.reset = function () {
    this.customerMoney = 0;
  } 
}

/* Пример использования */
const mango = new Cashier('Mango', products);

// Проверяем исходные значения полей
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
const totalPrice = mango.countTotalPrice(order);

// Проверям что посчитали
console.log(totalPrice); // 110

// Вызываем getCustomerMoney для запроса денег покупателя
mango.getCustomerMoney(300);

// Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300

// Вызываем countChange для подсчета сдачи
const change = mango.countChange();

// Проверяем что нам вернул countChange
console.log(change); // 190

// Проверяем результат подсчета денег
if(change !== null) {
   // При успешном обслуживании вызываем метод onSuccess
  mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
  // При неудачном обслуживании вызываем метод onError   
  mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

// Вызываем reset при любом исходе обслуживания
mango.reset();

// Проверяем значения после reset
console.log(mango.customerMoney); // 0