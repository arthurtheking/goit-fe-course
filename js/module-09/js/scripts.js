'Use strict'

// Task 1 

/*
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
  значение из массива. 

  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
*/

// const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

// const body = document.querySelector('body');
// const start = document.querySelector('.js-start');
// const stop = document.querySelector('.js-stop');



// const colorChange = () => {
//     let colorChanger = Math.floor(Math.random() * (colors.length + 1));
//     body.style.backgroundColor = colors[colorChanger];
// }

// let timer;

// const starter = () => {
//     timer = setInterval(colorChange, 1000);
// }

// const stopper = () => {
//     clearInterval(timer)
// }


// start.addEventListener('click', starter);
// stop.addEventListener('click', stopper);


// Homework 

// const start = document.querySelector('.js-start');
// const lap = document.querySelector('.js-take-lap');
// const reset = document.querySelector('.js-reset');
// const time = document.querySelector('.js-time');
// const lapScore = document.querySelector('.js-laps');


// let isActive = false;
// let isPaused = false;
// let id = null;
// let deltaTime = 0;
// let startTime = 0;

// const timeStarter = () => {
//   if(isActive) {
//     return;
//     isActive = true;
    
//   }
// }

// const startBtn = document.querySelector('.js-start'); // кнопка старт
// const takeLapBtn = document.querySelector('.js-take-lap'); // кнопка для считывание текущего времени
// const resetBtn = document.querySelector('.js-reset'); // сброс
// const timeDigits = document.querySelector('.js-time'); // цифры секундомера
// const lapsTable = document.querySelector('.js-laps'); // круги


// let id = null;
// let startTime = 0;
// let isActive = false;
// let isPause = false;
// let deltaTime = 0;


// function startCount(){
//     if (isActive) return;
//     isActive = true;
//     startTime = Date.now() - deltaTime;
//     id = setInterval(() =>{
//         const currentTime = Date.now();
//         deltaTime = currentTime - startTime;
//         updateClockface(deltaTime);
//     }, 100);
// }

// function formatTime(time){
//     let date = new Date(time);
    
//     const mili = String(date.getMilliseconds()).slice(0, 1);
//     const sec = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
//     const min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
//     return `${min}:${sec}.${mili}`
// }

// function updateClockface (time) {
//     const formattedTime = formatTime(time);
//     timeDigits.textContent = formattedTime;
// }

// function lap(){
//     const lapArr = [];
//     lapArr.push(document.querySelector('.js-time').textContent);
  
//     const lists = lapArr.map(el => {
//         list = document.createElement('li');
//         list.className = 'laps__item';
//         list.textContent = el;
//         return list;
//     })
//     document.querySelector('.laps').appendChild(...lists);
//   }

// function onStartClick(){
//     resetBtn.style.opacity = '1';
//     if(!isActive){
//         startCount();
//         startBtn.textContent = 'Pause';
//     } else {
//         stopPause();
//         startBtn.textContent = 'Continue';
//     }
// }

// function stopPause() {
//     clearInterval(id);
//     isActive = false;
// }


// function onResetButton(){
//     deleteLap();
//     stopPause();
//     deltaTime = 0;
//     updateClockface(deltaTime)
//     startBtn.textContent = 'Start';
// }

// function deleteLap(){
//     const delLaps = document.querySelectorAll('.laps__item');
//     delLaps.forEach(lap => {
//         lap.remove();
//     })
// }


// startBtn.addEventListener('click', onStartClick);
// resetBtn.addEventListener('click', onResetButton);
// takeLapBtn.addEventListener('click', lap);


const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-reset');
const lapBtn = document.querySelector('.js-take-lap');
const clockFace = document.querySelector('.js-time');
const list = document.querySelector('.js-laps');


const timer = {
    id : null,
    startTime: null,
    delta : null,
    isActive : false,
    
    start() {
        if(this.isActive) return;

        this.isActive = true;
        this.startTime = Date.now() - this.delta;
        this.delta;
        this.id = setInterval(() => {
            const currentTime = Date.now();
            this.delta = currentTime - this.startTime;
            updateTime(this.delta);
        }, 100);    
    },

    stop() {
        clearInterval(this.id);
        this.isActive = false;
    },

    clickButton() {
        if(this.isActive) {
            console.log('started');
        } else {
            // this.stop();
        }
    },

    reset() {
        this.stop();
        lapsReset();
        this.delta = 0;
        updateTime(this.delta);
        startBtn.textContent = 'Start';
    },

    lap() {
        
        let lap = document.createElement('li');
        lap.textContent = formatTime(this.delta);
        list.appendChild(lap);
        lap.setAttribute('class', 'lap');
    },
};


function updateTime (time) {
    const formattedTime = formatTime(time);
    clockFace.textContent = formattedTime;
}



function formatTime (ms) {
    const date = new Date(ms);

    let minutes = date.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = date.getSeconds();
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    let mseconds = String(date.getMilliseconds()).slice(0,1);
    
    return `${minutes}:${seconds}.${mseconds}`;
}


function lapsReset () {
    const laps = document.querySelectorAll('.lap');
    laps.forEach(lap => {
        lap.remove();
    })
}

function clickButton () {
    if(timer.isActive === false) {
        timer.start();
        startBtn.textContent = 'Pause';
    } else {
        timer.stop();
        startBtn.textContent = 'Continue';
    };
}


startBtn.addEventListener('click', clickButton);
stopBtn.addEventListener('click', timer.reset.bind(timer));
lapBtn.addEventListener('click', timer.lap.bind(timer));




















