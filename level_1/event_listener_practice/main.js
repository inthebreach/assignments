//mouse events
let square = document.querySelector('.square');
//Blue when the mouse hovers over the square
square.addEventListener('mouseover', function(){
    square.style.backgroundColor = 'blue';
    
});
//Red when the mouse holds the square
square.addEventListener('mousedown', function(){
    square.style.backgroundColor = 'red';
});
//Yellow when the mouse is released
square.addEventListener('mouseup', function(){
    square.style.backgroundColor = 'yellow';
});
//Green when the mouse is double clicked
square.addEventListener('dblclick', function(){
    square.style.backgroundColor = 'green';
});
//Orange when the mouse scrolls any direction in the window
window.addEventListener('mousewheel', function(){
    square.style.backgroundColor = 'orange';
});
//keyboard events
//Blue when the key b is pressed

document.addEventListener('keydown', (event) => {
    if(event.key === 'b'){
        square.style.backgroundColor = 'blue';
    }
    else if(event.key === 'r'){
        square.style.backgroundColor = 'red';
    }
    else if(event.key === 'y'){
        square.style.backgroundColor = 'yellow';
    }
    else if(event.key === 'g'){
        square.style.backgroundColor = 'green';
    }
    else if(event.key === 'o'){
        square.style.backgroundColor = 'orange';
    }
});

