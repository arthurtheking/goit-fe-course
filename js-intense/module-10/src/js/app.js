import Notepad from "./notepad-model";
import { renderNoteItems, addItemToList, findParentListItem, removeAllElementChildren, removeParentListItem } from "./view";
import { initialNotes } from "./utils/initial-notes";
import { refs, NOTE_ACTIONS } from "./utils/constants";


export const handleButtonActions = (event) => {
  
  if(event.target.nodeName !== 'I') return;
    const action = event.target.closest('button').dataset.action;
      
    switch(action) {
      case NOTE_ACTIONS.DELETE:
      
      const parentListItem = findParentListItem(event.target);
      notepad.deleteNote(parentListItem.dataset.id);
      removeParentListItem(parentListItem);

      break;
    };
};

export const handleFormSubmit = (event) => {
  event.preventDefault();

  const [titleInput, bodyInput] = event.currentTarget.elements;

  if(titleInput.value === '' || bodyInput.value === '') {
    alert('Invalid Input');

    return;
  }

  const savedItem = notepad.saveNote(titleInput.value, bodyInput.value);

  addItemToList(refs.list, savedItem);
  event.currentTarget.reset();
};

export const handleFormSearch = (event) =>  {
  const filtered = notepad.filterNotesByQuery(event.target.value);

  removeAllElementChildren(refs.list);
  renderNoteItems(refs.list, filtered);
};


Notepad.PRIORITIES = {
  0: { id: 0, value: 0, name: 'Low' },
  1: { id: 1, value: 1, name: 'Normal'},
  2: { id: 2, value: 2, name: 'High' },
};
  
  
export const notepad = new Notepad(initialNotes);


renderNoteItems(refs.list, initialNotes);
  
  
// LISTENERS
  
refs.list.addEventListener('click', handleButtonActions);
refs.editForm.addEventListener('submit', handleFormSubmit);
refs.search.addEventListener('input', handleFormSearch);