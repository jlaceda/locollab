import { create, find } from "../models/Business";
import User from "../models/User";
const router = require("express").Router();

router.get("/profile/:id", (req, res) => {
  res.json({
    error: "Not Implemented"
  })
});

// new profile
router.post("/profile", (req, res) => {
  const newBusiness = req.body;
  create(newBusiness)
    .then((business, err) => {
      if (err) return res.json({ error: err })
      // TODO: add business to user
      return res.json({ profile: business })
    });
});

// edit profile
router.put("/profile/:id", (req, res) => {
  res.json({
    error: "Not Implemented"
  })
});

router.get("/profiles", (req, res) => {
  find().exec()
    .then((profiles, err) => {
      if (err !== undefined) {
        return res.json({
          error: err
        })
      }
      if (profiles === undefined || profiles.length < 1) {
        return res.json({
          error: "No businesses found"
        })
      }
      res.json({
        profiles: profiles
      })
    })
    .catch(err => res.json({ error: err })
    )
});

export default router;
