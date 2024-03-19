var images = new Array(
  'https://dummyimage.com/1000x400/00ff00/ffffff',
  'https://dummyimage.com/1000x400/0000ff/ffffff',
  'https://dummyimage.com/1000x400/ffff00/ffffff',
  'https://dummyimage.com/1000x400/ff0000/ffffff',
);

var slider = setInterval(function() {
  document.getElementsByClassName('bg-img')[0].setAttribute('style', 'background-image: url("'+images[0]+'")');
  images.splice(images.length, 0, images[0]);
  images.splice(0, 1);
}, 3000);