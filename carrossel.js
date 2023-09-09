window.addEventListener('DOMContentLoaded', function() {
    var carousel = document.getElementById('carousel');
    var imageList = document.getElementById('image-list');
    var images = imageList.getElementsByTagName('li');
    var currentIndex = 0;
  
    function showImage(index) {
      for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
      }
      images[index].style.display = 'flex';
      images[index].style.justifyContent ='center';
    }
  
    function nextImage() {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      showImage(currentIndex);
    }
  
    setInterval(nextImage, 3000); // Alterna a cada 3 segundos (3000 milissegundos)
  });
  