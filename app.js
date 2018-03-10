
console.log('Starting app');

const fs = require('fs');
const os = require('os');
const yargs = require('yargs');

const notes= require('./notes.js');



const argv = yargs.argv;
var command = process.argv[2];
console.log(process.argv[2]);
console.log('Command: ', command);
console.log('Process: ', process.argv);
console.log('Yargs: ', argv);

if(command === "add") {
    // console.log('Adding New Note');
    notes.addNote(argv.title, argv.body)
} else if (command === "list"){
    // console.log("Listing All Notes");
    notes.getAll();
} else if (command === "read") {
//   console.log("Fetching Note");  
    notes.getNote(argv.title);
} else if (command === "remove") {
    // console.log("Removing Note");
    notes.removeNote(argv.title)
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