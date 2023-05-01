const openButton = document.getElementById('open-button');
const closeButton = document.getElementById('close-button');
const pageWindow = document.getElementById('page-window');

openButton.addEventListener('click', () => {
  pageWindow.classList.add('open');
});

closeButton.addEventListener('click', () => {
  pageWindow.classList.remove('open');
});



https://cdn.jsdelivr.net/gh/khaled-hayek/bot_cdn/main/popup.js