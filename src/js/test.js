// Create divs
let section = document.createElement('div');
section.classList.add('section');
section.classList.add('border');
section.classList.add('padding');

let iscoltwo = document.createElement('div');
iscoltwo.classList.add('col-two');
iscoltwo.classList.add('border');

// Add classes
let firstCol = document.createElement('div');
firstCol.classList.add('col-one');
firstCol.classList.add('-border');

let secondCol = document.createElement('div');
secondCol.classList.add('col-one');
secondCol.classList.add('border');

// Append text
let textHello = document.createTextNode('Hello');
firstCol.appendChild(textHello);
let textWorld = document.createTextNode('World');
secondCol.appendChild(textWorld);

// Append to body
document.body.appendChild(section);
section.appendChild(iscoltwo);
iscoltwo.appendChild(firstCol);
iscoltwo.appendChild(secondCol);