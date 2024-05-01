const button = document.querySelector('button');
const input = document.querySelector('#favchap');
const list = document.querySelector('ul');
const deleteButton = document.createElement('button');
const li = document.createElement('li');


button.addEventListener('click', function () {
    // Code to execute when the element is clicked
    if (input.value.trim() !== '') {

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.appendChild(li);
    }
    else input.focus();
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
})

input.value = '';
input.focus();