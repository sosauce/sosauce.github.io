document.addEventListener('DOMContentLoaded', function() {
    var clickableText = document.querySelector('span#emoji_down');
    clickableText.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var clickableText = document.querySelector('span#emoji_down2');
    clickableText.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('section3').scrollIntoView({ behavior: 'smooth' });
    });
  });
  