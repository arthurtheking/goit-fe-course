'Use strict'

const PRIORITY_TYPES = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
};

const notepad = {
    notes: [],
    getNotes() {
            // WORKS
        return this.notes;
    },

    saveNote(note) {
        this.notes.push(note);
        return note;
    },
     
    findNoteById(id) {
        for(let note of this.notes) {
            if(note.id === id) {                    // WORKS
                return note;
            };
        };
    },

    deleteNote(id) {
        for(let i = 0; i < this.notes.length; i += 1) {
            if(this.notes[i].id === id) {
                return this.notes.splice(i, 1)
            };
        };
    },

    updateNoteContent(id, updatedContent) {
        const findNote = this.findNoteById(id);
        const updatedNoteContent = Object.keys(updatedContent);
        for(let key of updatedNoteContent) {
            findNote[key] = updatedContent[key];
        }
        return findNote                             // WORKS
    },

    updateNotePriority(id, priority){
        const findNote = this.findNoteById(id);
        findNote.priority = priority;
        return findNote
    },

    filterNotesByQuery(query) { 
        const arr = [];
        for(let note of this.notes) {
            
            if(note.title.toLowerCase().includes(query) || note.body.toLowerCase().includes(query) || note.title.toUpperCase().includes(query) || note.body.toUpperCase().includes(query)) {      //WORKS
                arr.push(note);
            } else {
            
            }
        };
        return arr.length > 0 ? arr : null;

    },

    filterNotesByPriority(priority) {
        const filteredNotes = [];
        for(let note of this.notes) {
            if(note.priority === priority) {        // WORKS
                filteredNotes.push(note);
            };
        };
        return filteredNotes;
    },
};


notepad.saveNote({
    id: 1,
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  });
  
  notepad.saveNote({
    id: 2,
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  });
  
  notepad.saveNote({
    id: 3,
    title: 'Get comfy with Frontend frameworks',
    body:
      'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  });
  
  notepad.saveNote({
    id: 4,
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  });
  
//   console.log('Все текущие заметки: ', notepad.getNotes());

//   notepad.updateNotePriority(4, PRIORITY_TYPES.NORMAL);
// // Смотрю что у меня в заметках
// console.log(
//   'Заметки после обновления приоритета для id 4: ',
//   notepad.getNotes(),
// );

// notepad.updateNotePriority(3, PRIORITY_TYPES.LOW);
// console.log(
//   'Заметки после обновления приоритета для id 3: ',
//   notepad.getNotes(),
// );

// console.log(
//     'Отфильтровали заметки по ключевому слову "javascript": ',
//     notepad.filterNotesByQuery('javascript'),
//   );

//   console.log(
//     'Отфильтровали заметки по нормальному приоритету: ',
//     notepad.filterNotesByPriority(PRIORITY_TYPES.NORMAL),
//   );
//   notepad.updateNoteContent(3, { title: 'Get comfy with React.js or Vue.js' });
// console.log(
//   'Заметки после обновления контента заметки с id 3: ',
//   notepad.getNotes(),
// );