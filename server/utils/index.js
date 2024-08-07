const fs = require('fs').promises;
const { STATIC_PATH } = require('../config');
const path = require('path');

module.exports.createPublicFolder = async (path) => {
  await fs.mkdir(path, {
    recursive: true,
  });
};

module.exports.deleteImageFromDisk = async (imageName) => {
  try {
    await fs.unlink(path.join(STATIC_PATH, '/images', imageName));
  } catch (error) {
    console.log(error);
  }
};
