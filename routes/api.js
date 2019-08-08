const Business = require("../models/Business");
const User = require("../models/User");
const router = require("express").Router();

router.get("/profile/:id", (req, res) => {
  Business
    .findById(req.params.id)
    .exec((err, profile) => {
      if (err) return res.json({ error: err })
      return res.json({ profile: profile })
    });
});

router.get("/user/:id", (req, res) => {
  User
    .findById(req.params.id)
    .exec((err, user) => {
      if (err) return res.json({ error: err })
      return res.json({ user: user })
    });
});

// new profile
router.post("/profile", (req, res) => {
  const newBusiness = req.body;
  console.log(newBusiness);
  User.findOne({ email: newBusiness.email }).then(user => {
    let errors = [];
    if (user) {
      errors.push({ msg: 'Email already exists' });
      return res.json({
        errors
      });
    } else {
      const newUser = new User({
        name: newBusiness.name,
        email: newBusiness.email,
        password: newBusiness.password
      });
      newUser.password = newUser.generateHash(newBusiness.password);
      newUser
        .save()
        .then(user => {
          // add business
          Business
            .create({
              name: newBusiness.name,
              email: newBusiness.email,
              bname: newBusiness.bname,
              location: newBusiness.location,
              bdesc: newBusiness.bdesc,
              phone: newBusiness.phone,
              bemail: newBusiness.bemail,
              website: newBusiness.website,
              category: newBusiness.category,
              audience: newBusiness.audience
            })
            .then(business => {
              User
                .findByIdAndUpdate(
                  user._id,
                  {
                    business: business._id
                  },
                  {
                    useFindAndModify: false
                  }
                )
                .then((user) => {
                  User
                  .findById(user._id)
                  .populate('Business')
                  .then(updatedUser => {
                    return res.json({
                      status: "success",
                      msg: 'You are now registered and can log in',
                      user: {
                        business: updatedUser.business,
                        _id: updatedUser._id,
                        name: updatedUser.name,
                        email: updatedUser.email,
                      }
                    });
                  })
                })
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
  });
});

// edit profile
router.put("/profile/:id", (req, res) => {
  const givenId = req.params.id;
  const changes = req.body;
  Business
    .updateOne({ _id: givenId }, changes)
    .then(response => {
      if (response.n < 1) return res.json({ error: "Profile not Found" })
      return res.json({ message: `Profile ${givenId} updated.` })
    });
});

router.get("/profiles", (req, res) => {
  Business
    .find().exec()
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
    .catch(err => res.json({ error: err})
    )
});

module.exports = router;