const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    image: {
        type: String,
        required: true
    }
  },
  { timestamps: true },
);

const Portfolio = mongoose.model("portfolios", portfolioSchema);
module.exports = Portfolio;
