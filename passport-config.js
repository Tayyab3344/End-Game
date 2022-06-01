const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')
<<<<<<< HEAD
const User=require("C:/Users/ILYAS/Desktop/Web-Project/End-Game/Model/schema.js")  
=======
const User=require("D:/WebEngineeringProject/End-Game-1/Model/schema.js")  
>>>>>>> 371a7f988c2046d96bc1630c143375fe06f3dcae


module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      User.findOne({
        email: email
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};


