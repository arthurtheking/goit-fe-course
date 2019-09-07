import MicroModal from 'micromodal';
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';

import {NOTE_ACTIONS, refs, NOTIFICATION_MESSAGES, PRIORITY_TYPES} from "./utils/constants";
import {createElementListItemMarkup, addItemToList, findParentListItem, removeParentListItem, removeAllElementChildren} from "./view";
import Notepad from "./notepad-model";
import initialNotes from "../assets/notes.json";
import "./view";
import * as api from '../services/api'

const notyf = new Notyf();
const notepad = new Notepad(api.getNotes().then(notes => {
  this._notes = notes;
}));

Notepad.PRIORITIES = {
    0: { id: 0, value: 0, name: 'Low' },
    1: { id: 1, value: 1, name: 'Normal'},
    2: { id: 2, value: 2, name: 'High' },
  };

const markup = createElementListItemMarkup(notepad.notes);
refs.list.insertAdjacentHTML('beforeend', markup);


 const handleButtonActions = (event) => {
  
  if(event.target.nodeName !== 'I') return;
    const action = event.target.closest('button').dataset.action;
        
    switch(action) {
      case NOTE_ACTIONS.DELETE:
        
      const parentListItem = findParentListItem(event.target);
      notepad.deleteNote(parentListItem.dataset.id)
      
        .then(() => {
          removeParentListItem(parentListItem);
          notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
        });
      
      break;
    };
};

const handleFormSubmit = (event) => {
    event.preventDefault();
  
    const [titleInput, bodyInput] = event.currentTarget.elements;
  
    if(titleInput.value === '' || bodyInput.value === '') {
      notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY)
  
      return;
    }
  
  notepad.saveNote(titleInput.value, bodyInput.value)
  .then(newNote => {
    addItemToList(refs.list, newNote);
    notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
  });
  
    localStorage.removeItem('note-title');
    localStorage.removeItem('note-body');
    event.currentTarget.reset();
    
    MicroModal.close();

};


const handleFormSearch = (event) =>  {
  const filtered = notepad.filterNotesByQuery(event.target.value);
  removeAllElementChildren(refs.list);
  const noteMarkUp = createElementListItemMarkup(filtered);
  refs.list.insertAdjacentHTML('beforeend', noteMarkUp);
};

const handleOpener = () => {
  MicroModal.show('note-editor-modal');
  if(localStorage.getItem('note-title') !== '' && localStorage.getItem('note-body')) {
    refs.editForm.querySelector('input').value = localStorage.getItem('note-title');
    refs.editForm.querySelector('textarea').value = localStorage.getItem('note-body');
  }
};

refs.list.addEventListener('click', handleButtonActions);
refs.add.addEventListener('click', handleOpener);
refs.search.addEventListener('input', handleFormSearch);
refs.editForm.addEventListener('submit', handleFormSubmit);
refs.editForm.addEventListener('keyup', e => {
  if(refs.editForm.querySelector('input').value !== '') {
    localStorage.setItem('note-title', refs.editForm.querySelector('input').value)
  };
  if(refs.editForm.querySelector('textarea').value !== '') {
  localStorage.setItem('note-body', refs.editForm.querySelector('textarea').value);
  };
})




// const refs = {
//   form: document.querySelector('form'),
//   postMessage: localStorage.getItem('feedback-post'),
// }

// const [textArea] = refs.form.children;

// if(refs.postMessage){
//   textArea.value = refs.postMessage;
// }

// refs.form.addEventListener('keyup', e => {
//   console.log(textArea.value)

//   localStorage.setItem('feedback-post', textArea.value);
// })

// refs.form.addEventListener('submit', e => {
//   e.preventDefault();

//   localStorage.removeItem('feedback-post');
//   e.currentTarget.reset();
// })