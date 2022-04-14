const LocalStratrgy = require('passport-local').Strategy
function initialize(passport){
passport.use(new LocalStrategy({usernameField: 'email'}))
}