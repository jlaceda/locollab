const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
//const jwtSecret = require('../config/jwtConfig');

// Load User model
const User = require('../models/User');

module.exports = function(passport) {

  passport.use('login', new LocalStrategy(
    { usernameField: 'email' },
    function(email, password, done) {
      console.log(email)
      console.log(password)
      User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.validPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

  const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
    secretOrKey: "locollab_secret",
  };
  
  passport.use(
    'jwt',
    new JWTstrategy(opts, (jwt_payload, done) => {
      try {
        User.findOne({
          where: {
            username: jwt_payload.id,
          },
        }).then(user => {
          if (user) {
            console.log('user found in db in passport');
            // note the return removed with passport JWT - add this return for passport local
            done(null, user);
          } else {
            console.log('user not found in db');
            done(null, false);
          }
        });
      } catch (err) {
        done(err);
      }
    }),
  );

  // passport.use(
  //   new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  //     console.log(email)
  //     console.log(password)
  //     // Match user
  //     User.findOne({
  //       email: email
  //     }).then(user => {
  //       if (!user) {
  //         console.log('That email is not registered');
  //         return done(null, false, { message: 'That email is not registered' });
  //       }

  //       // Match password
  //       bcrypt.compare(password, user.password, (err, isMatch) => {
  //         if (err) throw err;
  //         if (isMatch) {
  //           console.log('logged in!');
  //           return done(null, user);
  //         } else {
  //           console.log('Password incorrect');
  //           return done(null, false, { message: 'Password incorrect' });
  //         }
  //       });
  //     });
  //   })
  // );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};