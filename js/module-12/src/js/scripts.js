'Use strict'

const template = document.querySelector('.js-template');
const listCards = document.querySelector('.js-list-cards');
const input = document.querySelector('.js-form input[type=text]');
const form = document.querySelector('.js-form');

const source = template.innerHTML.trim();
const temp = Handlebars.compile(source);


Object.keys(localStorage).forEach(elem => {
   fetch(`https://api.linkpreview.net/?key=5bd2be4683f4df4868c2be896cecac30712acbad1b051&q=${elem}`)
   .then(response => {
       if(response.ok) return response.json();
   })
   .then(data => {
       listCards.insertAdjacentHTML('afterbegin', temp(data));
   })
   .catch(err => console.error(err));
});

///////////////////////////////////////////////////////////////////////////////////////////////////////

function handleDelBtn(evt) {

    evt.preventDefault();
 
    const liUrl = document.querySelector('.js-li-url');
    if (evt.target.nodeName !== "BUTTON") return;
    localStorage.removeItem(liUrl.name);
    evt.target.parentElement.parentElement.remove();	
}

/////////////////////////////////////////////////////////////////////////////////////////////////////


function handleFormSubmit(evt) {

   evt.preventDefault();
   
   const regUrl = /^((ftp|http|https):\/\/)?(www\.|)([A-z|0-9]+)\.([A-z]{2,})/;

   if(!regUrl.test(input.value)) {
       input.parentNode.reset();
       return alert('URL is invalid! Try again.');
   } 

   fetch(`https://api.linkpreview.net/?key=5bd2be4683f4df4868c2be896cecac30712acbad1b051&q=${input.value}`)
   .then(response => {
       if(response.ok) return response.json();
   })
   .then(data => {
       if(localStorage.getItem(data.url) !== null) return alert('This URL already exists!')
       localStorage.setItem(data.url, data.url)
       const markup = temp(data)
       listCards.insertAdjacentHTML('afterbegin', markup);
   })
   .catch(err => console.error(err));;	;

   input.parentNode.reset();
}


/////////////////////////////////////////////////////////////////////////////////////////////////////


form.addEventListener('submit', handleFormSubmit);
listCards.addEventListener('click', handleDelBtn)