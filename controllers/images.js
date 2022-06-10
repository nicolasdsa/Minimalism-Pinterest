class imagesController {
  async upload(image) {
    const format = image.image.mimetype.split('/')[1];
    const name = `${image.image.md5}${Math.random()}`;
    const path = `assets/${name}.${format}`;
    const img = await image.image.mv(path);
    return path;
  }
}


module.exports = new imagesController();