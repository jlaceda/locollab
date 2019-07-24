const router = require("express").Router();

router.get("/profile/:id", (req, res) => {
  res.json({
    error: "Not Implemented"
  })
});

// new profile
router.post("/profile/:id", (req, res) => {
  res.json({
    error: "Not Implemented"
  })
});

// edit profile
router.put("/profile/:id", (req, res) => {
  res.json({
    error: "Not Implemented"
  })
});

router.get("/profiles", (req, res) => {
  res.json({
    error: "Not Implemented"
  })
});

module.exports = router;
