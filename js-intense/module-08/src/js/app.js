'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

class Notepad {
  constructor(notes) {
      this._notes = notes;
  };

  static getPriorityName(priorityId) {
      const priorityArray = Object.values(Notepad.PRIORITIES);
      for(let priority of priorityArray) {
          if(priority.id === priorityId) {
              return(priority.name);
          };
      };
  };

  get notes() {
      return this._notes
  };

  logList() {
    return this.list
  }

  saveNote(note) {
      this.notes.push(note);
      return note;
  };

  deleteNote(id) {
      for(let i = 0; i < this.notes.length; i += 1) {
          if(this.notes[i].id === id) {           
              return this.notes.splice(i, 1)
          };
      };
  };

  findNoteById(id) {
      for(let note of this.notes) {
          if(note.id === id) {                    
              return note;
          };
      ц}у;
  };

  updateNoteContent(id, updatedContent) {
      const findNote = this.findNoteById(id);
      const updatedNoteContent = Object.keys(updatedContent);
      for(let key of updatedNoteContent) {
          findNote[key] = updatedContent[key];
      };
      return findNote                             
  };

  updateNotePriority(id, priority) {
      const findNote = this.findNoteById(id);     
      findNote.priority = priority;
      return findNote
  };

  filterNotesByQuery(query) { 
      const arr = [];
      for(let note of this.notes) {                  
          if(note.title.toLowerCase().includes(query.toLowerCase()) || note.body.toLowerCase().includes(query.toLowerCase())) {      
              arr.push(note);
          };
      };
      return arr
  };

  filterNotesByPriority(priority) {
      const filteredNotes = [];
      for(let note of this.notes) {
          if(note.priority === priority) {        
              filteredNotes.push(note);
          };
      };
      return filteredNotes;
  };

  createActionButton(action, iconType) {
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

  createNoteItemContent(title, body) {

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

  createNoteItemFooter(priority) {
    const noteFooter = document.createElement('footer');
    noteFooter.classList.add('note__footer');

    // creating priority section
    const prioritySection = document.createElement('section');
    prioritySection.classList.add('note__section');

    const decreaseButton = this.createActionButton(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_DOWN);
    const increaseButton = this.createActionButton(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_UP);

    const notePriority = document.createElement('span');
    notePriority.classList.add('note__priority');
    notePriority.textContent = `Priority ${priority}`;

    // creating edit section
    const editSection = document.createElement('section');
    editSection.classList.add('note__section');

    const editButton = this.createActionButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT);
    const deleteButton = this.createActionButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE);

    // append buttons into section
    prioritySection.append(decreaseButton, increaseButton, notePriority);
    editSection.append(editButton, deleteButton);

    // append sections into footer
    noteFooter.append(prioritySection, editSection);

    return noteFooter;
  };

  createNoteItem({id, title, body, priority}) {

    const listItem = document.createElement('li');
    listItem.classList.add('note-list__item');
    listItem.dataset.id = id;

    const noteBlock = document.createElement('div');
    noteBlock.classList.add('note');

    const content = this.createNoteItemContent(title, body);
    const footer = this.createNoteItemFooter(priority);

    noteBlock.append(content, footer);
    listItem.appendChild(noteBlock);

    console.log(listItem)
    return listItem
  };

  renderNoteItems(listRef, data) {
    const listItems = data.map(item => this.createNoteItem(item));
    listRef.append(...listItems);
  };
};

const notepad = new Notepad(initialNotes);

notepad.notes
const list = document.querySelector('.note-list');

notepad.renderNoteItems(list, initialNotes);