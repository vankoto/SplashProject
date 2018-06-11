///--- Code for the home page slider to move when swiped ---///
$("#slideshow").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if(Math.floor(xClick - xMove) > 5){
            $(this).carousel('next');
        }
        else if(Math.floor(xClick - xMove) < -5){
            $(this).carousel('prev');
        }
    });
    $("#slideshow").on("touchend", function(){
            $(this).off("touchmove");
    });
});

///--- Code for services modal on click images. ---///
var openModal = document.getElementsByClassName('overlay-box');
for(var i = 0; i < openModal.length; i++){
  openModal[i].addEventListener("click", function(){
    $('.modal-overlay').fadeIn();
  }, false);
}
var closeModal = document.getElementById('close-modal');
  closeModal.addEventListener("click", function(){
    $('.modal-overlay').fadeOut();
  }, false);

var imageIndex = 1;
var currentImage = function(n) {
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

var openImageOne = document.getElementById('img-one');
  openImageOne.addEventListener("click", function(){
    currentImage(1);
  }, false);
var openImageTwo = document.getElementById('img-two');
  openImageTwo.addEventListener("click", function(){
    currentImage(2);
  }, false);
var openImageThree = document.getElementById('img-three');
  openImageThree.addEventListener("click", function(){
    currentImage(3);
  }, false);
var openImageFour = document.getElementById('img-four');
  openImageFour.addEventListener("click", function(){
    currentImage(4);
  }, false);

///--- Code for google maps. ---///
function splashMap() {
  var splash = {
    lat: 55.8558759,
    lng: 9.8521969
  };
  var map = new google.maps.Map(
    document.getElementById('map'),
    {
    zoom: 15,
    center: splash,
    scrollwheel: false,
    draggable: false,
    styles: [
      {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#3FA8DF'}]
      },
      {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#000000'}]
      },
    ]
    });
  var marker = new google.maps.Marker({
    position: splash,
    map: map
  });
}

///--- Code for facebook like button. ---///
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/dk_DK/sdk.js#xfbml=1&version=v3.0';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
