import Notepad from "./notepad-model";
import { renderNoteItems } from "./view";
import { initialNotes } from "./utils/initial-notes";
import { refs } from "./utils/constants";
import { handleButtonActions, handleFormSubmit, handleFormSearch } from "./handlers";


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