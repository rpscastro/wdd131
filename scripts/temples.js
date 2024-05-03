// select the DOM elements for output
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
// use the date object
const today = new Date();


year.innerHTML = `&copy ${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;


// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#ham');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/

