const express = require("express");
const multer = require("multer");
var docxConverter = require("docx-pdf");
const path = require("path");
const app = express();
const port = 4000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uplods");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
app.post("/convertFile", upload.single("file"), (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file Uploaded",
      });
    }
    let outpath = path.join(__dirname, "files", `${req.file.originalname}.pdf`);
    docxConverter(req.file.path, outpath, (err, result) => {
      if (err) {
        console.log(err);
        return req.status(500).json({
          message: "Error Converting Docx to Pdf",
        });
      }
      res.download(outpath, () => {
        console.log("file downloaded");
      });
    });
  } catch (error) {
    res.send(600).json({
      message: "Internal server Error",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is started on port ${port}`);
});
