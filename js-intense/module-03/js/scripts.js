'Use strict'

// const refs = {
//     allLogins: ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'],

//     isLoginUnique(login) {
//         if(this.allLogins.includes(login)) {
//             alert('Login already exists!');
//             return false;
//         }else{
//             return true;
//         }
//     },

//     isLoginValid(login) {
//         if(login.length>=4 && login.length<=16) {
//             return true;
//         }else{
//             alert('Length Error!');
//             return false;
//         }
//     },

//     addLogin(login) {
//         login = prompt('Enter login')
//         if(this.isLoginValid(login) && this.isLoginUnique(login)) {
//           this.allLogins.push(login);
//           alert('Login was successfully added!');
//           console.log(this.allLogins);
//         }
//     }
// }

// refs.addLogin();

// let arr = ['a', 'b'];

// arr.push(function() {
//     alert(this)
// });

// arr[2]();

const obj = {
    name: "Arthur",
    age: 19,
    showInfo: function () {
        alert(`I am ${this.name}. I am ${this.age}`)
    } 
}

obj.showInfo();