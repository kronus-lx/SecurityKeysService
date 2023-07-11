const crypto = require('crypto');

function createKey(hostname) {
    const { privateKey, publicKey } = 
        crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
            },
            privateKeyEncoding:{
                type: 'pkcs8',
                format: 'pem'
            }
        });
    return {
        hostname: hostname,
        public: publicKey,
        private: privateKey
    }
}
module.exports = createKey; 