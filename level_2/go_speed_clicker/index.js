//Make a site that tracks how many times the user has clicked anywhere on the page (or a specific button if you prefer) and displays that click count to the user. Then, using localStorage or sessionStorage, make it so the number of clickCounter will remain on the screen even after the site is refreshed.

const button = document.querySelector('button');
function handleClick() {
  let clickCounter = localStorage.getItem('clickCounter');
  if (clickCounter === null) {
    clickCounter = 0;
  }
  clickCounter++;
  localStorage.setItem('clickCounter', clickCounter);
  console.log(clickCounter);
}

button.addEventListener('click', handleClick);

const clickDisplay = localStorage.getItem('clickCounter');
if (clickDisplay) {
  document.querySelector('p').textContent = `You have clicked the button ${clickDisplay} times`;
}

setInterval(() => {
  const clickDisplay = localStorage.getItem('clickCounter');
  if (clickDisplay) {
    document.querySelector('p').textContent = `You have clicked the button ${clickDisplay} times`;
  }
}, 1000);

setTimeout(() => {
    localStorage.clear();
    }, 10000);
    
    let timeout = setTimeout(() => {
      localStorage.clear();
      }, 10000);
      
      let timeOut= document.getElementById('timer');
        timeOut.addEventListener('click', () => {
            clearTimeout(timeout);
        });
        
        setTimeout(function(){timeOut.innerHTML = "You Have 10 Seconds Left";}, 000);   
        setTimeout(function(){timeOut.innerHTML = "You Have 9 Seconds Left";}, 1000);
        setTimeout(function(){timeOut.innerHTML = "You Have 8 Seconds Left";}, 2000);
        setTimeout(function(){timeOut.innerHTML = "You Have 7 Seconds Left";}, 3000);
        setTimeout(function(){timeOut.innerHTML = "You Have 6 Seconds Left";}, 4000);
        setTimeout(function(){timeOut.innerHTML = "You Have 5 Seconds Left";}, 5000);
        setTimeout(function(){timeOut.innerHTML = "You Have 4 Seconds Left";}, 6000);
        setTimeout(function(){timeOut.innerHTML = "You Have 3 Seconds Left";}, 7000);
        setTimeout(function(){timeOut.innerHTML = "You Have 2 Seconds Left";}, 8000);
        setTimeout(function(){timeOut.innerHTML = "You Have 1 Seconds Left";}, 9000);
        setTimeout(function(){timeOut.innerHTML = "You Have 0 Seconds Left";}, 10000);
       
      