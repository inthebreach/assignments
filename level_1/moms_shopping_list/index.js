document.querySelector('#submit').addEventListener('click', function(e) {
    e.preventDefault();
    var input = document.querySelector('#title').value + ' ';
    var list = document.querySelector('#list');
    var newDiv = document.createElement('div');
    var newButton = document.createElement('button');
    newDiv.textContent = input;
    newButton.textContent = 'X';
    list.appendChild(newDiv);
    newDiv.appendChild(newButton);
    newButton.addEventListener('click', function(e) {
        e.preventDefault();
        newDiv.remove();
    })
})
