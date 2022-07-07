const path = require("path");
const router = require("express").Router();
//index.js to be served from Express.js server
// '/' brings us to the homepage
// This GET route brings us to the homepage
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

router.get("/animals", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/animals.html"));
});

router.get("/zookeepers", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/zookeepers.html"));
});

//wildcard routes or pages if a user makes a request for a page that doesn't exist
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

module.exports = router;
