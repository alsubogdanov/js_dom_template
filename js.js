const aboutBtn = document.getElementById('aboutBtn');
const popup = document.getElementById('articleModal');
const closeModalBtn = document.getElementById('closeModal');

aboutBtn.addEventListener('click', () => {
  popup.classList.add('active');
  // popup.className = 'active';
  // popup.style.display = 'block';
});
closeModalBtn.addEventListener('click', () => {
  popup.classList.remove('active');
  // popup.style.display = 'none';
});

const toggleBtn = document.getElementById('toggle-button');
const services = document.getElementById('more-services');
toggleBtn.addEventListener('click', () => {
  if (toggleBtn.textContent === 'Show More') {
    services.style.display = 'block';
    toggleBtn.textContent = 'Show Less';
  } else {
    services.style.display = 'none';
    toggleBtn.textContent = 'Show More';
  }
});
