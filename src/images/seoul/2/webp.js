const imagemin = require('imagemin');
const webp = require('imagemin-webp');

imagemin(['./*.jpg'], 'images', {
  use: [
    webp({
      quality: 75
    })
  ]
})
  .then(function() {
    console.log('Images converted!');
  })
  .catch(e => {
    console.log(e.message);
  });
