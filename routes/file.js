const express = require("express");
const router = express.Router();
const { upload } = require("@/controller/file");

router.post("/upload", upload.single("image"), (req, res) => {
  try {
    res.status(200).json({
      message: "Image uploaded succesfully",
      file: req.file,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
