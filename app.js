
console.log('Starting app');

const fs = require('fs');
const os = require('os');
const yargs = require('yargs');

const notes= require('./notes.js');



const argv = yargs.argv;
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
    notes.getAll();
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