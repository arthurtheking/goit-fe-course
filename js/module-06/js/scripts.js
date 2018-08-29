// 'Use strict'

// function Guest (name, room) {
//   this.name = name,
//   this.room = room
// }

// console.log(Guest.prototype);

// const mango = new Guest('Mango', 121);
// console.log(mango);


// Guest.prototype.showAllInfo = function () {
//   console.log(`name: ${this.name}, room: ${this.room}`)
// }

// const max = new Guest('Max', 256);

// mango.showAllInfo();
// max.showAllInfo();


// function Hero (name, xp) {
//   this.name = name,
//   this.xp = xp;
// };



// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} XP`);
//   this.xp += amount;
//   console.log(`${this.name} has totally ${this.xp} XP`);
// };

// const mad = new Hero('MADZ', 15000);

// console.log(mad);

// mad.gainXp(1600);

// Warrior.prototype = Object.create(Hero.prototype);


// function Warrior (name, xp, weapon) {
//   Hero.call(this, name, xp);
//   this.weapon = weapon;
// }

// Warrior.prototype.attack = function (dmg) {
//   console.log(`${this.name} attacked the mudcrab with ${this.weapon} and dealed ${dmg} damage`);
// };
// const morty = new Warrior('Morty', 15000, 'staff');


// console.log(morty);
// morty.attack(45);

// morty.gainXp(200);


// class Guest {
//   constructor (name, days, room) {
//     this.name = name;
//     this.days = days;
//     this.room = room;
//   };

//   get age () {
//     return this.age
//   }

//   set sex (value) {
//     this.sex = value;
//   }

//   getInfo() {
//     console.log(`
//     ${this.name} will stay in room ${this.room} for ${this.days} days
//     `)
//   }
// };

// console.log(typeof Guest);
// console.log(Guest.prototype);

// const guestio = new Guest('Malvina', 15, 166);
// guestio.getInfo();


// class Car {
//   constructor (name) {
//     this.name = name;
//   }

//   boughtCar() {
//     console.log(`You bought ${name}`)
//   }
// }

// class Bmv extends Car{
//   constructor(name, quality) {
//     super(name);
//     this.quality = quality;
//   }
// } 


// Task 1
/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/


// function Account (login, email, friendsCount) {
//   this.login = login;
//   this.email = email;
//   this.friendsCount = friendsCount;
// }
// Account.prototype.getAccountInfo = function() {
//   console.log(`Email: ${this.email}, login: ${this.login}, Friends Count: ${this.friendsCount}`)
// };


// const max = new Account('Max', 'max@mail.ru', 15);
// const molly = new Account('Mol', 'mol@mail.com', 22);
 
// max.getAccountInfo();
// molly.getAccountInfo();



// // Task 2

// /*
//   Напишите функцию-конструктор StringBuilder.
  
//   На вход она получает один параметр string - строку.
  
//   Добавьте следующие методы в prototype функции-конструктора.
  
//     - getValue() - выводит в консоль текущее значение поля value
  
//     - append(str) - получает парметр str - строку и добавляет 
//       ее в конец значения поля value
    
//     - prepend(str) - получает парметр str - строку и добавляет 
//       ее в начало значения поля value
  
//     - pad(str) - получает парметр str - строку и добавляет 
//       ее в начало и в конец значения поля value
// */


// function StringBuilder(string = "") {
//   this.value = string;
// }

// StringBuilder.prototype.getValue = function(value) {
//   console.log(this.value);
// }

// StringBuilder.prototype.append = function (str) {
//   this.value = this.value + str
// }

// StringBuilder.prototype.prepend = function(str) {
//   this.value = str + this.value 
// }

// StringBuilder.prototype.pad = function (str) {
//   this.value = str + this.value + str;
// }

// const myString = new StringBuilder('.');

// myString.append('^'); 
// myString.getValue(); // '.^'

// myString.prepend('^'); 
// myString.getValue(); // '^.^'

// myString.pad('='); 
// myString.getValue(); // '=^.^='


// // Task 3, 4, 5

// /*
//   Создайте класс Car с указанными полями и методами.
// */

// class Car {
//   constructor(maxSpeed, value) {

//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this.running = false;
//     this.distance = 0;
//     this._value = value;
//     /*
//       Добавьте свойства:
//         - speed - для отслеживания текущей скорости, изначально 0.
        
//         - maxSpeed - для хранения максимальной скорости 
        
//         - running - для отслеживания заведен ли автомобиль, 
//           возможные значения true или false. Изначально false.
          
//         - distance - содержит общий киллометраж, изначально с 0
//     */
//   }

//   turnOn() {
//     this.running = true;
//     // Добавьте код для того чтобы завести автомобиль
//     // Просто записывает в свойство running значание true
//   }

//   turnOff() {
//     this.running = false;
//     // Добавьте код для того чтобы заглушить автомобиль
//     // Просто записывает в свойство running значание false
//   }
  
//   accelerate(spd) {

//     if (spd < this.maxSpeed) {
//       this.speed = spd;
//     }
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed
//   }
  
//   decelerate(spd) {

//     if (spd < this.maxSpeed && spd > 0) {
//       this.speed = spd;
//     }
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed и не меньше нуля
//   }

//   drive(hours) {
//     if (this.running === true) {
//       this.distance = hours * this.speed;
//     }
//     // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//     // но только в том случае если машина заведена!
//   }

//   static getSpecs (obj) {
//     console.log(`max speed: ${obj.maxSpeed}, running: ${obj.running}, distance: ${obj.distance}`)
//   }

//   get value() {
//     return this._value;
//   }

//   set value(price) {
//     this._value = price;
//   }
// }


// const bmv = new Car(220);
// console.log(bmv);
// bmv.turnOn();
// console.log(bmv);
// bmv.accelerate(180);
// console.log(bmv);
// bmv.decelerate(120);
// console.log(bmv);
// bmv.drive(10)
// console.log(bmv);

// Car.getSpecs(bmv);

// const volkswagen = new Car(190, 3000);
// console.log(volkswagen);
// console.log(volkswagen.value);
// volkswagen.value = 5000;
// console.log(volkswagen.value)


// Homework 

/*
  Сеть фастфудов предлагает несколько видов гамбургеров.
  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
  Дополнительно, гамбургер можно:
	- посыпать приправой (+10 денег, +0 калорий)
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
  Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
  указанные методы, которые принимают и возвращают данные указанного типа.
*/

// /**
//  * Класс, объекты которого описывают параметры гамбургера.
//  */
// class Hamburger {
//   /**
//    * @constructor
//    * @param {String} size - Размер
//    * @param {String} stuffing - Начинка
//    */
//   constructor(size, stuffing) {
//     this._size = size;
//     this._stuffing = stuffing;
//     this._toppings = [];
//   }

//   /**
//    * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
//    * @param {String} topping - Тип добавки
//    */
//   addTopping(topping) {}

//   /**
//    * Убрать topping, при условии, что она ранее была добавлена
//    * @param {String} topping - Тип добавки
//    */
//   removeTopping(topping) {}

//   /**
//    * Получить список toppings
//    * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
//    *
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
//    */
//   getToppings() {}

//   /**
//    * Узнать размер гамбургера
//    * @returns {String} - размер гамбургера
//    *
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
//    */
//   getSize() {}

//   /**
//    * Узнать начинку гамбургера
//    * @returns {String} - начинка гамбургера
//    *
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
//    */
//   getStuffing() {}

//   /**
//    * Узнать цену гамбургера
//    * @returns {Number} - Цена в деньгах
//    *
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
//    */
//   calculatePrice() {}

//   /**
//    * Узнать калорийность
//    * @returns {Number} - Калорийность в калориях
//    *
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
//    */
//   calculateCalories() {}
// }

// /*
//   Размеры, виды добавок и начинок объявите как статические поля класса.
//   Добавьте отсутсвующие поля по аналогии с примером.
// */
// Hamburger.SIZE_SMALL = 'SIZE_SMALL';
// Hamburger.SIZE_LARGE = ...

// Hamburger.SIZES = {
//   [Hamburger.SIZE_SMALL]: {
//     price: 30,
//     calories: 50,
//   },
// };

// Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
// Hamburger.STUFFING_SALAD = ...
// Hamburger.STUFFING_MEAT = ...

// Hamburger.STUFFINGS = {
//   [Hamburger.STUFFING_CHEESE]: {
//     price: 15,
//     calories: 20,
//   },
// };

// Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
// Hamburger.TOPPING_SAUCE = ...

// Hamburger.TOPPINGS = {
//   [Hamburger.TOPPING_SPICE]: {
//     price: 10,
//     calories: 0,
//   },
// };

// /* Вот как может выглядеть использование этого класса */

// // Маленький гамбургер с начинкой из сыра
// const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// // Добавка из приправы
// hamburger.addTopping(Hamburger.TOPPING_SPICE);

// // Спросим сколько там калорий
// console.log("Calories: ", hamburger.calculateCalories());

// // Сколько стоит?
// console.log("Price: ", hamburger.calculatePrice());

// // Я тут передумал и решил добавить еще соус
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// // А сколько теперь стоит?
// console.log("Price with sauce: ", hamburger.calculatePrice());

// // Проверить, большой ли гамбургер?
// console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// // Убрать добавку
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// // Смотрим сколько добавок
// console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1

// /*
//   🔔 Обратите внимание на такие моменты:
//     	✔️ класс не взаимодействует с внешним миром. Это не его дело, этим занимается
//     		другой код, а класс живет в изоляции от мира
//     	✔️ обязательные параметры (размер и начинка) мы передаем через конструктор,
// 		чтобы нельзя было создать объект, не указав их
//     	✔️ необязательные (добавка) добавляем через методы
//     	✔️ типы начинок обозначены "константами" с понятными именами (на самом деле просто
// 	    	свойствами, написанным заглавными буквами, которые мы договорились считать "константами")
//     	✔️ объект создается через конструктор - функцию, которая задает начальные значения полей.
//     	✔️ в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки),
//       		а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории
// 		логично в тот момент, когда это потребуется, а не заранее.

class Hamburger {
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }
  
  addTopping (topping) {
    if (!this._toppings.includes(topping)) {
      this._toppings.push(topping);
    }
  }

  removeTopping(topping) {
    this._toppings = this._toppings.filter(x => x !== topping);
  }

  get getToppings() {
    return this._toppings;
  }

  get getSize () {
    return this._size;
  }

  get getStuffing () {
    return this._stuffing;
  }

  get calculatePrice () {
    return Hamburger.SIZES[this._size].price + Hamburger.STUFFINGS[this._stuffing].price + this._toppings.reduce((acc, x) => {
      return Hamburger.TOPPINGS[x].price + acc}, 0);  
  }

  get calculateCalories () {
    return Hamburger.SIZES[this._size].calories + Hamburger.STUFFINGS[this._stuffing].calories + this._toppings.reduce((acc, x) => {
      return Hamburger.TOPPINGS[x].calories + acc}, 0);  
  }

}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
  Hamburger.SIZE_LARGE = 'SIZE_LARGE';
  
  Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
      price: 30,
      calories: 50,
    },
    [Hamburger.SIZE_LARGE]: {
      price: 50,
      calories: 100,
    }
  };

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';
  
Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 50,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15,
  },
};
  
Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';
  
Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  },
};


// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
  
// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log(hamburger);
  
// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories);

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice);

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice);

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.getSize === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);


// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings.length); // 1