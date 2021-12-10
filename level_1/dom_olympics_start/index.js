let header = document .getElementById('header');
header.innerText = 'JavaScript Made This!! ';
header.style.textAlign = 'center';
header.style.fontSize = '50px';




let spanName = document.createElement('span');
header.appendChild(spanName);
spanName.classList.add('name');
spanName.innerText = '\r\n Jared Leonguerrero ';
spanName.style.fontSize = '20px';
spanName.style.textAlign = 'center';


let spanName2 = document.createElement('span');
header.appendChild(spanName2); 
spanName2.innerText = ' wrote the Javascript ';
spanName2.style.fontSize = '20px';
spanName2.style.textAlign = 'center';


let autoMsg = document.getElementsByClassName('message'); 
autoMsg[0].innerText = "Cheech: That's Maui Wowwie man!"
autoMsg[1].innerText = "Chong: No kiddin man?"
autoMsg[2].innerText = "Cheech: No man I'm not kiddin man that's strong stuff"
autoMsg[3].innerText = "Chong: Wowwie man! You ain't kiddin"

let inMsg = document.getElementById('messages');
document.getElementById('sendButton').addEventListener('click', function(e) {
    e.preventDefault();
    let mess = document.getElementById('mess').value;
    let newMessage = document.createElement('div');
    inMsg.appendChild(newMessage);
    //alternate between right and left classes on sendButton
    if (document.getElementById('sendButton').classList.contains('right')) {
        newMessage.classList.add('right');
        newMessage.innerText = mess;
        document.getElementById('sendButton').classList.remove('right');
        document.getElementById('sendButton').classList.add('left');
    } else {
        newMessage.classList.add('left');
        newMessage.innerText = mess;
        
        document.getElementById('sendButton').classList.remove('left');
        document.getElementById('sendButton').classList.add('right');
    }
    newMessage.innerText = mess;
    document.getElementById('mess').value = "";
    
});

//on click of clearbutton, clear all messages
document.getElementById('clearButton').addEventListener('click', function(e) {
    e.preventDefault();
    inMsg.innerHTML = "";
});

//on select of a new theme-two change background color of left and right classes
document.getElementById('theme-drop-down').addEventListener('change', function(e) {
    e.preventDefault();
    let theme = document.getElementById('theme-drop-down').value;
    if (theme === 'theme-one') {
        document.getElementsByClassName('left')[0].style.backgroundColor = 'rgb(222, 184, 135)';
        document.getElementsByClassName('left')[1].style.backgroundColor = 'rgb(222, 184, 135)';
        document.getElementsByClassName('right')[0].style.backgroundColor = 'lightblue';
        document.getElementsByClassName('right')[1].style.backgroundColor = 'lightblue';
    } else if (theme === 'theme-two') {
        document.getElementsByClassName('left')[0].style.backgroundColor = 'rgb(222, 135, 135)';
        document.getElementsByClassName('left')[1].style.backgroundColor = 'rgb(222, 135, 135)';
        document.getElementsByClassName('right')[0].style.color = 'rgb(255, 255, 255)';
        document.getElementsByClassName('right')[0].style.backgroundColor = 'rgb(0, 0, 0)';
        document.getElementsByClassName('right')[1].style.color = 'rgb(255, 255, 255)';
        document.getElementsByClassName('right')[1].style.backgroundColor = 'rgb(0, 0, 0)';
    }
});
