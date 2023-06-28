const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, uniqueSuffix + fileExtension);
  },
});

// Create multer instance
const upload = multer({ storage });

// Handle file upload
router.post("/add", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // Process the image file as needed (e.g., save the image filename in the database)

  // Retrieve file details
  const { originalname, filename, mimetype, size } = req.file;

  // Send the file details as the response
  res.json({
    message: "Image uploaded successfully",
    file: {
      originalname,
      filename,
      mimetype,
      size,
    },
  });
});

// Serve static files
router.use(express.static("public"));

module.exports = router;
