///--- Code for services modal on click images. ---///
function openModal(){
  $('.modal-overlay').fadeIn();
}
function closeModal(){
  $('.modal-overlay').fadeOut();
}

var imageIndex = 1;
function currentImage(n) {
  showImages(imageIndex = n);
}

function showImages(n) {
  var i;
  var images = document.getElementsByClassName("show-image");
  if (n > images.length){
    imageIndex = 1
  }
  if (n < 1){
    imageIndex = images.length
  }
  for (i = 0; i < images.length; i++){
      images[i].style.display = "none";
  }
  images[imageIndex-1].style.display = "block";
}
