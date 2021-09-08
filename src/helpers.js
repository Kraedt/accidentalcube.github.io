
function importAll(r) {
  let images = {};
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });
  return images;
}

export const importImages = (path) => importAll(require.context(`./assets/images/${path}`, false, '/\.png/'));