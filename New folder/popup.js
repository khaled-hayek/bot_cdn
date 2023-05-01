const openButton = document.getElementById('open-button');
const closeButton = document.getElementById('close-button');
const pageWindow = document.getElementById('page-window');

openButton.addEventListener('click', () => {
  pageWindow.classList.add('open');
});

closeButton.addEventListener('click', () => {
  pageWindow.classList.remove('open');
});
