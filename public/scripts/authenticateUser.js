const LocalStrategy = require('passport-local').Strategy // used to authenticate a password
const bcrypt = require('bcryptjs') // used to encode a password
const passport = require('passport')
var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('../src/database/database.sqlite3'); // to use the database

module.exports = function (passport) {

    passport.use(new LocalStrategy(function (email, password, done) {
        db.get('SELECT * FROM users WHERE email = ?', email, function (err, row) {
            if (!row) {
                return done(null, false, { message: 'Wrong email!' });
            }

            if (bcrypt.compareSync(password, row.password)){
                 return done(null, row);
            }
            return done(null, false, { message: 'Wrong password!' });
        });
    }));

    passport.serializeUser(function (user, done) {
        return done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        db.get('SELECT id, email FROM users WHERE id = ?', id, function (err, row) {
            if (!row) {
                return done(null, false);
            }
            return done(null, row);
        });
    });
}

