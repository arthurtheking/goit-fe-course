// // tasks

// //First task

// const name = 'Mango';
// const guest = name;

// console.log(guest);

// //Second task

// const day = "02";
// const month = 10;
// const year = 2017;

// const date = day + '\\' + month +'\\' + year;
// console.log(date); // 02\10\2017

// //Third task

// const name = prompt('Введите ваше имя:');
// alert (name +' это ваше имя?');

// //forth task 
// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';

// const message = `${name} прибывает на отдых ${date} в ${roomType}`;

// console.log(message);

// //Fifth task

// const padding = "20px";
// const border = "5px";
// const contentWidth = "100px";

// let totalWidth = Number.parseInt(padding) + Number.parseInt(border) + Number.parseInt(contentWidth) + 'px';

// console.log(totalWidth);

// //Sixth task
// const year = prompt('Какой сейчас год?')
 
// if (year === '2018') {
// alert ('Всё верно!')
// } else {
//   alert ('Но ведь на дворе 2018!')
// };

// //Seventh task
// const randomNumber = prompt('Введите произвольное целое число');

// if (randomNumber === null )  {
// alert ('Приходите ещё!')
// } else if (randomNumber == Number.parseInt(randomNumber)) {
//   alert ('Спасибо!')
// } else {
//   alert('Необходимо было ввести целое число!')
// };

// //Eighth task
// const num = Number.parseInt(Math.random() * 100);

// // let type = (num%2 = 0) ? "even" : "odd";
// if (num % 2) {
//   type = "odd"
// } else {
//   type = "even"
// };

// console.log(`${num} is ${type}`);

// //Ninth task

// let hours = 12;
// let minutes = 11;
// let seconds = 10;

// let newHours;
// let newSeconds;
// let newMinutes;

//  if (hours<10) {
//  newHours = "0" + hours
//  } else  {
//    newHours = hours
//  };
// if (minutes<10) {
//  newMinutes = "0" + minutes
//  } else  {
//    newMinutes = minutes
//  };
// if (seconds<10) {
//  newSeconds ='0' + seconds
//  } else  {
//    newSeconds = seconds
//  };

// const time = `${newHours}:${newMinutes}:${newSeconds}`;

// console.log('Time is:', time);

// //Tenth task

// const num = prompt ('Введите число от 1 до 5');

//  switch (num) {
//    case "1":
//      alert("Каталог хостелов");
//      break;
//    case "2":
//      alert("Каталог бюджетных отелей");
//      break;
//    case "3" :
//      alert("Каталог отелей ***");
//      break;
//    case "4":
//      alert("Каталог отелей ****");
//      break;
//    case "5": 
//      alert("Каталог лучших отелей");
//      break;
//  };

// if (num === null) {
//   alert('Очень жаль, приходите еще!')
// } else if (num>5 ) {
//   alert('Неверный ввод, возможные варианты 1-5!')
// } else if (num != Number(num)) {
//   alert('Неверный ввод, возможные варианты 1-5!')
// };

//Homework

//task 1

// const ADMIN_LOGIN = 'admin';
// const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';

// let adminLogin = prompt('Введите ваш логин:');
// let adminPass;
// if (adminLogin === ADMIN_LOGIN) {
//    let adminPass = prompt('Введите пароль')
//    if (adminPass === ADMIN_PASSWORD) {
//        alert('Добро пожаловать!')
//    } else if (adminPass === null) {
//        alert('Отменено пользователем!')
//    } else {
//        alert('Доступ запрещён!')
//    };
// } else if (adminLogin === null) {
//     alert('Отменено пользователем!')
// } else {
//     alert('Доступ запрещён!')
// };

//task 2

const sharm = 15;
const hurgada = 25;
const taba = 6;

let num = prompt('Введите количество мест:');
let yes;

if (num != Number.parseInt(num)) {
    alert('Ошибка ввода')
} else {


     if (num<=taba) {
        let yes = confirm('Есть место в группе Taba')


            if ( yes == true) {
                alert('Приятного путешествия в группе Taba')
            } else {
                alert('Нам очень жаль, приходите еще!')
            };


    } else if(num<=sharm) {
        let yes = confirm('Есть место в группе Sharm')


        if ( yes == true) {
            alert('Приятного путешествия в группе Sharm')
        } else {
            alert('Нам очень жаль, приходите еще!')
        };


    } else if (num<=hurgada) {
        let yes = confirm('Есть место в группе Hurgada')


        if ( yes == true) {
            alert('Приятного путешествия в группе Hurgada')
        } else {
            alert('Нам очень жаль, приходите еще!')
        };


    };


};