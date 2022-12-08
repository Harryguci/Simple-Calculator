const express = require("express");
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
router.get("/", (req, res) => {
  res.json([
    {
      Title: "Hello World",
      Description: "The demo description",
      Author: "Harryguci",
    },
  ]);
});
// define the about route
router.get("/about", (req, res) => {
  res.render("home", {
    title: "home page",
    css: `<link rel="stylesheet" href="./css/home.css">`,
    javascript:
      `<script type="module" src="./javascript/calculate.js"></script>` +
      "\n" +
      `<script src="./javascript/home.js"></script>`,
  });
});

module.exports = router;
