import { NOTE_ACTIONS, ICON_TYPES } from "./utils/constants";
import Notepad from "./notepad-model";
import { notepad } from "./app";

export const addItemToList = (listRef, item) => {
  const noteItem = createNoteItem(item)

  listRef.appendChild(noteItem);
};
  
export const createActionButton = (action, iconType) => {
  const button = document.createElement('button');
  button.classList.add('action');
  button.dataset.action = action;

  const icon = document.createElement('i');
  icon.classList.add('material-icons');
  icon.classList.add('action__icon');
  icon.textContent = iconType;
 
  button.appendChild(icon);
  return button;
};
  
export const createNoteItemContent = (title, body) => {
  
  const noteContent = document.createElement('div');
  noteContent.classList.add('note__content');
  
  const noteTitle = document.createElement('h2');
  noteTitle.classList.add('note__title');
  noteTitle.textContent = title;
  
  const noteBody = document.createElement('p');
  noteBody.classList.add('note__body');
  noteBody.textContent = body;
  noteContent.append(noteTitle, noteBody);
  
  return noteContent;
};
  
export const createNoteItemFooter = (priority) => {
  const noteFooter = document.createElement('footer');
  noteFooter.classList.add('note__footer');
  
  // creating priority section
  const prioritySection = document.createElement('section');
  prioritySection.classList.add('note__section');
  
  const decreaseButton = createActionButton(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_DOWN);
  const increaseButton = createActionButton(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_UP);
  
  const notePriority = document.createElement('span');
  notePriority.classList.add('note__priority');
  notePriority.textContent = `Priority ${Notepad.getPriorityName(priority)}`;
  
  // creating edit section
  const editSection = document.createElement('section');
  editSection.classList.add('note__section');
  
  const editButton = createActionButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT);
  const deleteButton = createActionButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE);
  
  // append buttons into section
  prioritySection.append(decreaseButton, increaseButton, notePriority);
  editSection.append(editButton, deleteButton);
  
  // append sections into footer
  noteFooter.append(prioritySection, editSection);
  
  return noteFooter;
};
  
export const createNoteItem = ({id, title, body, priority}) => {
  
  const listItem = document.createElement('li');
  listItem.classList.add('note-list__item');
  listItem.dataset.id = id;
  
  const noteBlock = document.createElement('div');
  noteBlock.classList.add('note');
  
  const content = createNoteItemContent(title, body);
  const footer = createNoteItemFooter(priority);
  
  noteBlock.append(content, footer);
  listItem.appendChild(noteBlock);
    
  return listItem
};

export const findParentListItem = (event) => {
  const parentListItem = event.closest('.note-list__item');
  return parentListItem;
};

export const removeParentListItem = (parentListItem) => {
  parentListItem.remove();
};

export const removeAllElementChildren = (listRef) => {
  while(listRef.firstChild) {
    listRef.removeChild(listRef.firstChild);
  };
};

export const renderNoteItems = (listRef, data) => {
  const listItems = data.map(item => createNoteItem(item));
  listRef.append(...listItems);
};