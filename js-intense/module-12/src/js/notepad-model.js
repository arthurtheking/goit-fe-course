import {PRIORITY_TYPES} from './utils/constants'

export default class Notepad {

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
        const shortid = require('shortid');
        return shortid.generate();
    };
  
    get notes() {
        if(localStorage.getItem('my-notes')) {
            this._notes = JSON.parse(localStorage.getItem('my-notes'))
        }
        return this._notes
    };
  
    saveNote(title, body) {  
        const newNote = {
          id: Notepad.generateUniqueId(),
          title: title,
          body: body,
          priority: Notepad.getPriorityName(PRIORITY_TYPES.LOW),
        }

        this._notes.push(newNote);

        localStorage.setItem('my-notes', JSON.stringify(this._notes))
        return newNote;
    };
  
    deleteNote(id) {
        this._notes = this._notes.filter(note => note.id !== id);
        localStorage.setItem('my-notes', JSON.stringify(this._notes))
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

        return findNote;        
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
};