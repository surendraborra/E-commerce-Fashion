const multer = require('multer');

// Configure Multer for file upload
const storage = multer.diskStorage({});
const multerConfig = {
  storage,
};

module.exports = {
  multerConfig,
};
