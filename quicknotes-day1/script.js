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
  {id:2, text:"Practice Flexbox", done:true},
];
cosole.log(note)
//Making dcisions
const noteText = " " ;
if (noteText.trim() === ""){
  console.log("Error: A note cannot be empty.")
}else if (noteText.length > 100){
  console.log("Error: A note cannot be more than 100 characters.")
}else{
  console.log("Note Saved")
}
//loops
for(let i =1; i<3; i++){
  console.log("Looping", i);
}

//for...of: easiest way to visit each array item
const tasks =["HTML", "CSS", "JS"]
for (const task of tasks){
  console.log(`I'm learning ${task}`);
}
//Functions
function greet(name){
  return `Hello ${name}`;
}
const message = greet("John");
console.log(message);
console.log(greet("Jane"));
//Arrow functions
const doubleArrow  = (n) => {
  return n * 2;
}

const doubleShort = (n) => n*2;
let attempts = 0;
while(attempts < 5){
  attempts++;
  console.log(`Attempt ${attempts}`);
  if (attempts === 3){
    console.log("Successs on attempt 3 - stopping early.");
    break;//Leave the loop
  }
}
//Array methods
const notes2 = [
  {id:1, text:"Revise HTML forms", done:false},
  {id:2, text:"Practice Flexbox", done:true},
  {id:3, text:"Learn JS", done:false},
]
notes.forEach((note) => console.log(note.text));

//Functions
function nameDisplay(fName,mName, lName){
  return `${fName} ${mName} ${lName}`;
}
const person1 = nameDisplay("John", "M.", "Doe");
console.log(person1);
const person2 = nameDisplay("Jane", "A.", "Smith");
console.log(person2);