const toggle = document.querySelector('[aria-pressed]');

toggle.addEventListener('click', (e) => {
  const clickedElem = e.target;  
  let selected = clickedElem.getAttribute('aria-pressed') === 'true';
  const icon = clickedElem.querySelector('svg'); 
  const textElem = clickedElem.querySelector('.favorite-text');

  if (selected === true) {
    // Deselect
    clickedElem.classList.remove('selected');
    textElem.innerText = 'Not Favorite';
  }

  else {
    // Select
    clickedElem.classList.add('selected');
    textElem.innerText = 'Favorite';
  }

  clickedElem.setAttribute('aria-pressed', String(!selected));   
});