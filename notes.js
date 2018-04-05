console.log("Starting Notes.js");

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
       return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote =  (title, body) => {
    // console.log("Adding Note ", title, body);
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note)=>{
        return note.title === title;
    });

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    } 
   
};

var getAll = () => {
    console.log("Getting all notes");
    
}

var getNote = (title) => {
    // console.log("Getting note", title);
    var notes = fetchNotes();
    var theNote = notes.filter((note)=> note.title == title);  
    return theNote[0];

}

var removeNote = (title) => {
    // console.log("Removing notes" , title);
    var notes = fetchNotes();
    var deleteNotes = notes.filter((note) =>  note.title !== title );
    saveNotes(deleteNotes);

    return notes.length !== deleteNotes.length;
} 

var logNote = (note) => {
    console.log("---");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}



module.exports = {
    addNote, //addNote : addNote(The same,ES6 Shortcut)
    getAll,
    getNote,
    removeNote,
    logNote
}