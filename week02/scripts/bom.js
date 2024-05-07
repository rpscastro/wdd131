const button = document.querySelector('button');
const input = document.querySelector('#favchap');
const list = document.querySelector('ul');




button.addEventListener('click', function () {
    // Code to execute when the element is clicked
    if (input.value.trim() !== '') {

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        })
        
        input.value = '';
        input.focus();
    }
    else input.focus();
});

