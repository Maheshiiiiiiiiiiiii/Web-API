const passport = require('passport');
const { Strategy: OAuth2Strategy } = require('passport-oauth2');

passport.use(new OAuth2Strategy({
    authorizationURL: process.env.OAUTH_AUTH_URL,
    tokenURL: process.env.OAUTH_TOKEN_URL,
    clientID: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    callbackURL: process.env.OAUTH_CALLBACK_URL
  },
  (accessToken, refreshToken, profile, done) => {
    // Logic to find or create a user with the OAuth2 profile info
    User.findOrCreate({ oauthId: profile.id }, (err, user) => {
      return done(err, user);
    });
  }
));

module.exports = passport;
