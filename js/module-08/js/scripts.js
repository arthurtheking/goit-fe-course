'Use strict'

// Task 1 

// const button = document.querySelector('.button');
// button.addEventListener('click', () => {
//   const content = parseInt(button.textContent) + 1;
//   button.textContent =+ content; 
// })




// Task 2

// const btn = document.querySelector('button');
// const calc = document.querySelector('.calc');
// const child = calc.children;

// const firstInp = child[1];
// const secondInp = child[3];
// let result = document.querySelector('.result');

// btn.addEventListener('click', () => {
//     result.textContent = parseInt(firstInp.value) + parseInt(secondInp.value);
// });




// Task 3

// const add = document.querySelector('.js-add');
// const sub = document.querySelector('.js-sub');
// let value = document.querySelector('js-value');
// const span = document.querySelector('.value');
// value = 0;


// add.addEventListener('click', () => {
//     value += 1;
//     if (value < 1) {
//         value = 0;
//         span.textContent = value;
//     } else {
//         span.textContent = value;
//     }
// });

// sub.addEventListener('click', () => {
//     value = value - 1;
//     if (value < 0) {
//         span.textContent = 0;
//     } else {
//         span.textContent = value;
//     }
// });


// Task 4

// const options = document.querySelector('.options');
// const button = document.querySelector('.btn');
// let result = document.querySelector('.result');

// const click = (event) => {
//     event.preventDefault();

//     let checked = options.querySelector('input:checked');
//     result.textContent += `${checked.parentNode.textContent}`;
// }


// Task 5

// const images = document.querySelector('.images');

// images.addEventListener('click', handleImgClicker);

// function handleImgClicker (event) {
//     event.preventDefault();

//     const target = event.target;
//     if (target.nodeName === 'IMG') {
//         alert(`this src: ${target.src}`)
//     } else {return};
// };


// Task 6

// const list = document.querySelector('.list');


// list.addEventListener('click', (target) => {
//     target = event.target;

//     if (target.nodeName === 'BUTTON') {
//         target.parentNode.remove();
//     } else {return null}
// });


// Task 7

// const inputs = document.querySelector('.inputs');

// inputs.addEventListener('change', (event) => {
//     event = event.target;
//     const checkLength = Number(event.dataset.length);

//     if(checkLength === event.value.length) {
//         event.style.outline = '1px solid green';
//     } else 
//     event.style.outline = '1px solid red';
// });

// Task 8

// const input = document.querySelector('.input');
// const text = document.querySelector('.input-value');

// input.addEventListener('focus', (event) => {
//   event = event.target;
//   console.log('Input is in focus!')
// });

// input.addEventListener('blur', (event) => {
//     event = event.target;
//     console.log('Input is unfocused!')
//   });

// input.addEventListener('input', (evt) => {
//   evt = evt.target;  
//   text.textContent = `Current input value: ` + input.value;
// });

// Homework 
// Создайте компонент галлереи изображений следующего вида.
  
//     <div class="image-gallery js-image-gallery">
//       <div class="fullview">
//         <!-- Если выбран первый элемент из preview -->
//         <img src="img/fullview-1.jpeg" alt="alt text 1">
//       </div>
//       <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
//       <ul class="preview">
//         <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
//         <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
//         <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
//       </ul>
//     </div>   
    
//     🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
//     Реализуйте функционал:
      
//       - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
//       - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
//         создается динамически при загрузке страницы.
    
//       - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
//         он содержит ссылку на большое изображение. preview и его элементы, также создаются 
//         динамически, при загрузке страницы.
        
//       - При клике в элемент preview, необходимо подменить src тега img внутри fullview
//         на url из data-атрибута выбраного элемента.
        
//       - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
//       - Изображений может быть произвольное количество.
      
//       - Используйте делегирование для элементов preview.
      
//       - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
//       - CSS-оформление и имена классов на свой вкус.
      
      
//     🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
//       размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
//       Подберите изображения одинаковых пропорций.
// */

// /*
//   Массив объектов с данными для создания компонента выглядит следующим образом.
//   Замените пути на соотвествующие вашим, или назовите изображения аналогично.
// */
const galleryItems = [
    { preview: 'img/1.jpg', fullview: 'img/1F.jpg', alt: "alt text 1" },
    { preview: 'img/2.jpg', fullview: 'img/2F.jpg', alt: "alt text 2" },
    { preview: 'img/3.jpg', fullview: 'img/3F.jpg', alt: "alt text 3" },
    { preview: 'img/4.jpg', fullview: 'img/4F.jpg', alt: "alt text 4" },
    { preview: 'img/5.jpg', fullview: 'img/5F.jpg', alt: "alt text 5" },
    { preview: 'img/6.jpg', fullview: 'img/6F.jpg', alt: "alt text 6" },
  ];
  
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.image-gallery');
  
    const createFull = ({fullview, alt}) => {
        return `<div class="fullview"><img class="fullviewImg" src="${fullview}" alt="${alt}" width=1280 height=720></div>`
    };

    const previewItem = galleryItems.reduce((acc, {fullview, preview, alt}) =>
        acc + `<li class="preview__item"><img class="previewImg" src="${preview}" data-fullview="${fullview}" alt="${alt}" width=200 height=120></li>`, ""
    );
    const createPreviewItem = () => {
        return `<ul class='preview__list'>${previewItem}</ul>`
    };
    gallery.insertAdjacentHTML('afterbegin', createPreviewItem());
    gallery.insertAdjacentHTML('afterbegin', createFull(galleryItems[0]));

    const previewImg = gallery.querySelector('.previewImg');
    previewImg.classList.add('clickElem');
  
    gallery.lastElementChild.addEventListener('click', (event) => {
        event.preventDefault();
  
      if(event.target.nodeName !== 'IMG') return;
  
      const fullImg = gallery.querySelector('.fullviewImg');
      const datasetFullview = event.target.dataset.fullview;
      const altFullview = event.target.alt;
      
      fullImg.setAttribute('src', datasetFullview);
      fullImg.setAttribute('alt', altFullview);
  
      const clickElem = gallery.querySelector('.previewImg.clickElem');
      clickElem.classList.remove('clickElem');
      
      event.target.classList.add('clickElem');
    });
})  