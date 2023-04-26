window.addEventListener('scroll', function() {
    var hue = Math.round(window.pageYOffset / 5) % 256; /* calculate the hue based on the scroll position */
    document.body.style.backgroundColor = 'hsl(' + hue + ', 50%, 50%)'; /* set the background color of the body */
    
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      var content = document.querySelector('.content');
      content.style.marginTop = parseInt(getComputedStyle(content).marginTop) + 2000 + 'px'; /* add more content to the page */
    }
  });
  