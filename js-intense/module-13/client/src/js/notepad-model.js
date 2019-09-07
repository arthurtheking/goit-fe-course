import {PRIORITY_TYPES} from './utils/constants'
import * as api from '../services/api';

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
  
    get notes() {
        // if(localStorage.getItem('my-notes')) {
        //     this._notes = JSON.parse(localStorage.getItem('my-notes'))
        // }

        // console.log(this._notes)
        // return this._notes;

        return api.getNotes().then(notes => this._notes = notes);
    };
  
    saveNote(title, body) {  

        const newNote = {
            title: title,
            body: body,
            priority: Notepad.getPriorityName(PRIORITY_TYPES.LOW)
        };


        return api.saveNote(newNote)
            .then(savedNote => {

                this._notes.push(savedNote);
                return savedNote;
        })
    };
  
    deleteNote(id) {

        // return new Promise(resolve => {
        //     setTimeout(() => {
        //         this._notes = this._notes.filter(note => note.id !== id);
        //         localStorage.setItem('my-notes', JSON.stringify(this._notes));
                
        //         resolve(this._notes);
        //     }, 300);
        // })


        return api.deleteNote(id).then(() => {
            this._notes = this._notes.filter(note => note.id !== id);

            return id
        })
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