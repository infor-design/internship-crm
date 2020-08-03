const toggle = document.querySelector('[aria-pressed]');

toggle.addEventListener('click', (e) => {
  const clickedElem = e.target;  
  let selected = clickedElem.getAttribute('aria-pressed') === 'true';
  clickedElem.setAttribute('aria-pressed', String(!selected));   
  const icon = clickedElem.querySelector('svg'); 

  if (selected === true) {
  clickedElem.classList.add('selected');
    // icon.setAttribute('stroke', 'transparent');
    // icon.setAttribute('fill', '#3b3b3b');
    //icon.querySelector('use').setAttribute('xlink:href', '#icon-star-filled');
  }

  else {
  clickedElem.classList.remove('selected');
    // icon.setAttribute('stroke', '#3b3b3b');
    // icon.setAttribute('fill', 'white');
    //icon.querySelector('use').setAttribute('xlink:href', '#icon-star-outline');
  }
});