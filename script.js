window.addEventListener('scroll', function() {
    var hedsoSection = document.getElementById('hedso-section');
    var sectionPosition = hedsoSection.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    if (sectionPosition < windowHeight) {
      hedsoSection.classList.add('show');
    }
  });

  