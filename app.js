
// console.log('Starting app');

const fs = require('fs');
const os = require('os');
const yargs = require('yargs');

const notes= require('./notes.js');

var titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

var bodyOptions = {
    describe: 'The body of the note',
    demand: true,
    alias: 'b'
}

const argv = yargs
.command('add','Add a new note',{
    title: titleOptions,
    body: bodyOptions
})
.command('list','List of all notes')
.command('read','Read a note')
.command('remove','Remove a note',{
    title: titleOptions,
    body: bodyOptions
})
.help()
.argv;
var command = process.argv[2];
// console.log(process.argv[2]);
// console.log('Command: ', command);
// console.log('Process: ', process.argv);
// console.log('Yargs: ', argv);

if(command === "add") {
    // console.log('Adding New Note');
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note Created!");
        notes.logNote(note);
    } else{
        console.log("Note title taken!");
    }
} else if (command === "list"){
    // console.log("Listing All Notes");
    var allNotes = notes.getAll();
    console.log(`Printing: ${allNotes.length} notes.`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === "read") {
//   console.log("Fetching Note");  
    var myNote = notes.getNote(argv.title);
    if (myNote) {
        console.log("Note Found!");
        notes.logNote(myNote);
    } else{
        console.log("Note NOT found!");
    }

} else if (command === "remove") {
    // console.log("Removing Note");
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was removed" : "Note not FOUND!"
    console.log(message);
    } else {
    console.log("Command Not Found!");
}



// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greetings.txt', `hello ${user.username}`, function (err) {
//     if (err) { 
//         console.log('Unable to write to file');
//     }
// });