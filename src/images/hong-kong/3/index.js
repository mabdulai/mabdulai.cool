function importAll(r) {
  let images = {};
  r.keys().forEach(item => {
    images[item.replace('./', '')] = r(item);
    return;
  });
  return images;
}

const imageArray = importAll(require.context('./', false, /\.(png|jpe?g|svg|webp)$/));
const images = Object.values(imageArray).map(image => {
  return { original: image, thumbnail: image };
});

export default images;