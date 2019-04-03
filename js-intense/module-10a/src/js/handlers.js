import { NOTE_ACTIONS, refs } from "./utils/constants";
import { addItemToList, removeListitem, removeAllElementChildren, renderNoteItems } from "./view";
import { notepad } from "./app";


export const handleButtonActions = ({target}) => {
  
  if(target.nodeName !== 'I') return;
    const action = target.closest('button').dataset.action;
      
    switch(action) {
      case NOTE_ACTIONS.DELETE:
      removeListitem(target);

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
