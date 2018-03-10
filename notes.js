console.log("Starting Notes.js");
var addNote =  (title, body) => {
    console.log("Adding Note ", title, body);
};

var getAll = () => {
    console.log("Getting all notes");
}

var getNote = (title) => {
    console.log("Getting note", title);
}

var removeNote = (title) => {
    console.log("Removing notes" , title);
}

module.exports = {
    addNote, //addNote : addNote(The same,ES6 Shortcut)
    getAll,
    getNote,
    removeNote
}