const Portfolio = require("../models/portfolio.model");
const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.post("/addPortfolio", upload.single("image"), verifyToken, async (req, res) => {
  try {
    const imgFile = req.file;
    const { name, url } = req.body;
    console.log(req.body);

    const imgName = imgFile ? imgFile.filename : null;

    await Portfolio.create({
      name,
      url,
      image: imgName,
    });
    res.status(201).json({ message: "Portfolio created" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/portfolios", async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.status(200).json(portfolios);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
