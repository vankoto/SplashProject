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
