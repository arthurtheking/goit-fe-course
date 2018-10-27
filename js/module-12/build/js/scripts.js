"use strict";
'Use strict';

var template = document.querySelector('.js-template');
var listCards = document.querySelector('.js-list-cards');
var input = document.querySelector('.js-form input[type=text]');
var form = document.querySelector('.js-form');
var source = template.innerHTML.trim();
var temp = Handlebars.compile(source);
Object.keys(localStorage).forEach(function (elem) {
  fetch("https://api.linkpreview.net/?key=5bd2be4683f4df4868c2be896cecac30712acbad1b051&q=".concat(elem)).then(function (response) {
    if (response.ok) return response.json();
  }).then(function (data) {
    listCards.insertAdjacentHTML('afterbegin', temp(data));
  }).catch(function (err) {
    return console.error(err);
  });
}); ///////////////////////////////////////////////////////////////////////////////////////////////////////

function handleDelBtn(evt) {
  evt.preventDefault();
  var liUrl = document.querySelector('.js-li-url');
  if (evt.target.nodeName !== "BUTTON") return;
  localStorage.removeItem(liUrl.name);
  evt.target.parentElement.parentElement.remove();
} /////////////////////////////////////////////////////////////////////////////////////////////////////


function handleFormSubmit(evt) {
  evt.preventDefault();
  var regUrl = /^((ftp|http|https):\/\/)?(www\.|)([A-z|0-9]+)\.([A-z]{2,})/;

  if (!regUrl.test(input.value)) {
    input.parentNode.reset();
    return alert('URL is invalid! Try again.');
  }

  fetch("https://api.linkpreview.net/?key=5bd2be4683f4df4868c2be896cecac30712acbad1b051&q=".concat(input.value)).then(function (response) {
    if (response.ok) return response.json();
  }).then(function (data) {
    if (localStorage.getItem(data.url) !== null) return alert('This URL already exists!');
    localStorage.setItem(data.url, data.url);
    var markup = temp(data);
    listCards.insertAdjacentHTML('afterbegin', markup);
  }).catch(function (err) {
    return console.error(err);
  });
  ;
  ;
  input.parentNode.reset();
} /////////////////////////////////////////////////////////////////////////////////////////////////////


form.addEventListener('submit', handleFormSubmit);
listCards.addEventListener('click', handleDelBtn);