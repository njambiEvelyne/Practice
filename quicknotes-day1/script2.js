//Changing content , style and classes
// Change the text
count.textContent = "You have 5 notes."
 
// Change a style directly (CSS property names become camelCase)
count.style.color = "#8e0000";
count.style.fontWeight = "bold";
// Better: add/remove CSS classes defined in style.css
count.classList.add("highlight");
count.classList.remove("highlight");
count.classList.toggle("highlight"); // add if missing, remove if present
 
// Read and change what the user typed in an input
const input = document.querySelector("#note-input");
console.log(input.value);  // current text in the box
input.value = "";          // clear the box
input.focus();             // put the cursor back in the box

//Creating elements
const list = document.querySelector("#notes-list");
const li =document.createElement("li");
li.textContent = "This is a new note.";
list.appendChild(li);

li.remove(); // remove the element from the DOM
list.innerHTML = "";