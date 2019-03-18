'Use strict';


// REFS

const refs = {
  list: document.querySelector('.note-list'),
  editForm: document.querySelector('.note-editor'),
  search: document.querySelector('.search-form'),
}

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


// MODEL

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

  static generateUniqueId () {
    const randomId = Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15);
    
      return randomId
  };

  get notes() {
      return this._notes
  };

  saveNote(title, body) {

      const newNote = {
        id: Notepad.generateUniqueId(),
        title: title,
        body: body,
        priority: PRIORITY_TYPES.LOW,
      }


      this.notes.push(newNote);
      return newNote;
  };

  deleteNote(id) {
      this._notes = this._notes.filter(note => note.id !== id);
  };

  findNoteById(id) {
      for(let note of this.notes) {
          if(note.id === id) {                    
              return note;
          };
      };
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

    const filtered = this.notes.filter(note => note.title.toLowerCase().includes(query.toLowerCase()) || note.body.toLowerCase().includes(query.toLowerCase()));

    return filtered;
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


  // UI
  
  addItemToList(listRef, item) {
    const noteItem = this.createNoteItem(item)

    listRef.appendChild(noteItem);
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
    notePriority.textContent = `Priority ${Notepad.getPriorityName(priority)}`;

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
    
    return listItem
  };

  removeListitem(event) {
    const parentListItem = event.closest('.note-list__item');
    const id = parentListItem.dataset.id;

    this.deleteNote(id);
    parentListItem.remove();
  };

  removeAllElementChildren(listRef) {
    while(listRef.firstChild) {
      listRef.removeChild(listRef.firstChild);
    }
  };

  renderNoteItems(listRef, data) {
    const listItems = data.map(item => this.createNoteItem(item));
    listRef.append(...listItems);
  };


  // HANDLERS

  handleButtonActions({target}) {

    if(target.nodeName !== 'I') return;
      const action = target.closest('button').dataset.action;
      
      switch(action) {
        case NOTE_ACTIONS.DELETE:
        notepad.removeListitem(target);

        break;
      };
  };

  handleFormSubmit(event) {
    event.preventDefault();

    const [titleInput, bodyInput] = event.currentTarget.elements;

    if(titleInput.value === '' || bodyInput.value === '') {
      alert('Invalid Input');

      return;
    }

    const savedItem = notepad.saveNote(titleInput.value, bodyInput.value);

    notepad.addItemToList(refs.list, savedItem);
    event.currentTarget.reset();
  };

  handleFormSearch(event) {
    const filtered = notepad.filterNotesByQuery(event.target.value);

    notepad.removeAllElementChildren(refs.list);
    notepad.renderNoteItems(refs.list, filtered);
  };
};


Notepad.PRIORITIES = {
  0: { id: 0, value: 0, name: 'Low' },
  1: { id: 1, value: 1, name: 'Normal'},
  2: { id: 2, value: 2, name: 'High' },
};


const notepad = new Notepad(initialNotes);
notepad.renderNoteItems(refs.list, initialNotes);


// LISTENERS

refs.list.addEventListener('click', notepad.handleButtonActions);
refs.editForm.addEventListener('submit', notepad.handleFormSubmit);
refs.search.addEventListener('input', notepad.handleFormSearch);