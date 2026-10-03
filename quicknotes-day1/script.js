console.log("Hello. Welcome");
console.log(2+3);
const appName = "QuickNotes";
let noteCount = 0;
noteCount +=1;
console.log(appName, noteCount);
//Object-Grouping related data
const note = {
  id : 1,
  text: "Revise HTML forms",
  done : false,
};
console.log(note.text);
note.done = true;
note.priority = "high";
console.log(note);

//An array of objects
const notes = [
  {id:1, text:"Revise HTML forms", done:false},
  {id:2, text:"Practice F"}
]