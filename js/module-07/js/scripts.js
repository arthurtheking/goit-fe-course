// 'Use strict'

// Task 1
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

// const menu = document.querySelector('.categories');
// console.log(menu);

// const item = menu.children;
// console.log(item[0]);

// const firstItem = item[0].querySelector('ul');
// firstItem.hidden = true;
// console.log(`Категория: ${item[0].outerText}`);

// firstItem.hidden = false;
// const firstListItem = firstItem.querySelectorAll('li');
// console.log(`Длинна вложенных li: ${firstListItem.length}`);


// const secondItem = item[1].querySelector('ul');
// secondItem.hidden = true;
// console.log(`Категория: ${item[1].outerText}`);

// secondItem.hidden = false;
// const secondListItem = secondItem.querySelectorAll('li');
// console.log(`Длинна вложенных li: ${secondListItem.length}`);


// const lastItem = item[2].querySelector('ul');
// lastItem.hidden = true;
// console.log(`Категория: ${item[2].outerText}`);

// lastItem.hidden = false;
// const lastListItem = lastItem.querySelectorAll('li');
// console.log(`Длинна вложенных li: ${lastListItem.length}`);


// Task 2

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

// const list = document.querySelector('.list');
// const firstItem = list.firstElementChild;
// firstItem.style.color = 'red';

// const lastItem = list.lastElementChild;
// lastItem.style.color = 'blue';


// Task 3

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// const list = document.querySelector('.list');

// const firstItem = document.createElement('li');
// list.appendChild(firstItem);
// firstItem.textContent = elements[0];

// const secondItem = document.createElement('li');
// list.appendChild(secondItem);
// secondItem.textContent = elements[1];

// const thirdItem = document.createElement('li');
// list.appendChild(thirdItem);
// thirdItem.textContent = elements[2];

// const forthItem = document.createElement('li');
// list.appendChild(forthItem);
// forthItem.textContent = elements[3];

// const lastItem = document.createElement('li');
// list.appendChild(lastItem);
// lastItem.textContent = elements[4];

// console.log(list);


// Task 4

/*
  Напишите скрипт для создания списка ul.
  
  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/

// function addElements () {
//   const list = document.createElement('ul');
//   const item = document.createElement('li');
// }






// Homework

/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

const createImage = img => {
  const picture = document.createElement('img');
  picture.setAttribute('src', img);
  picture.classList.add('post__image');
  picture.setAttribute('alt', 'some image');

  return picture;
};

const createHeading = title => {
  const heading = document.createElement('h2');
  heading.classList.add('post__title');
  heading.textContent = title;

  return heading;
};

const createParagraph = text => {
  const paragraph = document.createElement('p');
  paragraph.classList.add('post__text');
  paragraph.textContent = text;

  return paragraph;
};

const createLink = link => {
  const contact = document.createElement('a');
  contact.classList.add('button');
  contact.setAttribute('href', link);
  contact.textContent = 'Read more'

  return contact;
};

const createPostCards = ({img, title, text, link}) => {
  const postCard = document.createElement('div');
  postCard.classList.add('post');
  postCard.append(createImage(img), createHeading(title), createParagraph(text), createLink(link));
  
  return postCard;
};


const createCard = posts => {
  
  return posts.map(post => createPostCards(post));
};

const cards = createCard(posts);
document.querySelector('.cards').append(...cards);