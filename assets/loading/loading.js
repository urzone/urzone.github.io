
// Use JavaScript to update the width of the loading-bar element as the content of the page loads.

document.addEventListener('DOMContentLoaded', function() {
  var loadingBar = document.querySelector('.loading-bar');
  loadingBar.style.width = '100%';
  
  // Hide the loading container after all the other content has loaded
  window.addEventListener('load', function() {
    var loadingContainer = document.querySelector('#loading-container');
    if (!loadingContainer.classList.contains('hide')) {
      loadingContainer.classList.add('hide');
    }
  });
});