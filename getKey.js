'use strict';

const jwksClient = require('jwks-rsa');

const domain = 'dev-6xlimb1s.us.auth0.com';

const client = jwksClient({
  jwksUri: `https://${domain}/.well-known/jwks.json`,
});

module.exports = (header, callback) => {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
};
