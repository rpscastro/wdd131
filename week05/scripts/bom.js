const button = document.querySelector('button');
const input = document.querySelector('#favchap');
const list = document.querySelector('ul');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// button.addEventListener('click', function () {
//     // Code to execute when the element is clicked
//     if (input.value.trim() !== '') {

//         const li = document.createElement('li');
//         const deleteButton = document.createElement('button');
//         li.textContent = input.value;
//         deleteButton.textContent = '❌';
//         li.append(deleteButton);
//         list.append(li);

//         deleteButton.addEventListener('click', function () {
//             list.removeChild(li);
//             input.focus();
//         })

//         input.value = '';
//         input.focus();
//     }
//     else input.focus();
// });

button.addEventListener('click', () => {
    // Code to execute when the element is clicked
    if (input.value.trim() !== '') {

        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }

});

function displayList(item) {
    // Code to execute when the element is clicked
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })

};

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {

    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();

}