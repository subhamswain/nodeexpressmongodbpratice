const express = require("express");
const multer = require("multer");
const fs = require("fs"); // Add this line to use the fs module for file system operations
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = "uploads";
    // Check if the directory exists, and create it if it doesn't
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});

const upload = multer({ storage }).single("user_file");

app.post("/upload", upload, (req, resp) => {
  resp.send("file upload");
});

app.listen(5000);
