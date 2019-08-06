const express = require('express');
const router = express.Router();
const passport = require('passport');
// Load User model
//const { forwardAuthenticated } = require('../config/auth');

//const jwt = require('jsonwebtoken');

// Login Page
// router.get('/login', forwardAuthenticated, (req, res) => {
//   res.render('login');
// });

// newaccount Page
//router.get('/newaccount', forwardAuthenticated, (req, res) => res.render('newaccount'));

// newaccount
// router.post('/newaccount', (req, res) => {
//   const { name, email, password, password2 } = req.body;
//   console.log(req.body);
//   let errors = [];

//   if (!name || !email || !password || !password2) {
//     errors.push({ msg: 'Please enter all fields' });
//   }

//   if (password != password2) {
//     errors.push({ msg: 'Passwords do not match' });
//   }

//   if (password.length < 6) {
//     errors.push({ msg: 'Password must be at least 6 characters' });
//   }

//   if (errors.length > 0) {
//     console.log(errors)
//     return res.json({
//       errors
//     });
//   } else {
//     User.findOne({ email: email }).then(user => {
//       if (user) {
//         errors.push({ msg: 'Email already exists' });
//         return res.json({
//           errors
//         });
//       } else {
//         const newUser = new User({
//           name,
//           email,
//           password
//         });

//         bcrypt.genSalt(1, (err, salt) => {
//           if (err) {
//             console.log(err)
//             return res.json({
//               err
//             });
//           }
//           bcrypt.hash(newUser.password, salt, (err, hash) => {
//             if (err) {
//               console.log(err)
//               return res.json({
//                 err
//               });
//             }
//             newUser.password = hash;
//             newUser
//               .save()
//               .then(user => {
//                 // req.flash(
//                 //   'success_msg',
//                 //   'You are now registered and can log in'
//                 // );
//                 return res.json({
//                   status: "success",
//                   msg: 'You are now registered and can log in',
//                   userId: user._id
//                 });
//               })
//               .catch(err => console.log(err));
//           });
//         });
//       }
//     });
//   }
// });

// Login
// router.post('/login', (req, res, next) => {
//   console.log(req.body);
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/user/login?loginFailed=true',
//     failureFlash: true 
//   })(req, res, next);
// });

router.post('/login', 
  passport.authenticate('login', { failureRedirect: '/login' }),
  // successful login
  function(req, res) {
    const user = req.user;
    let cookie = req.cookies.userId;
    if (cookie === undefined) {
      // no: set a new cookie
      res.cookie('userId',user._id, { maxAge: 900000 });
      res.cookie('userName',user.name, { maxAge: 900000 });
      res.cookie('userEmail',user.email, { maxAge: 900000 });
      res.cookie('business',user.business, { maxAge: 900000 });
      console.log('cookies created successfully');
    } else {
      // yes, cookie was already present 
      console.log('cookie exists', cookie);
    } 
    // next();
    return res.json({
      status: "ok",
      message: "successfully logged in.",
      userId: user._id,
      userName: user.name,
      userEmail: user.email,
      business: user.business
    });
  }
);

// app.post('/login', (req, res, next) => {
//   passport.authenticate('login', (err, user, info) => {
//     if (err) {
//       console.log(err);
//     }
//     if (info != undefined) {
//       console.log(info.message);
//       res.send(info.message);
//     } else {
//       req.logIn(user, err => {
//         User.findOne({
//           where: {
//             email: user.email,
//           },
//         }).then(user => {
//           const token = jwt.sign({ id: user.email }, jwtSecret.secret);
//           res.status(200).send({
//             auth: true,
//             token: token,
//             message: 'user found & logged in',
//           });
//         });
//       });
//     }
//   })(req, res, next);
// });

// Logout
router.get('/logout', (req, res) => {
  //req.logout();
  //req.flash('success_msg', 'You are logged out');
  //res.redirect('/user/login');
  res.clearCookie("userId");
  res.clearCookie("userName");
  res.clearCookie("userEmail");
  return res.json({
    status: "ok",
    message: "successfully logged out.",
  });
  //res.redirect("/");
});

module.exports = router;