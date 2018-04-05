// var obj = {
//     name : 'Matt'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(obj.name);

// var personString = '{"name": "Matt", "age": 26}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: "WOWOWOWO",
    body: "WEEEE"
}
var originalNoteString = JSON.stringify(originalNote);
// console.log("Original String: " + originalNoteString);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);