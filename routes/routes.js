'use strict';

const controller = require('../controllers/Controller');
module.exports = (app) => {
    app.route('/about').get(controller.about)
    app.route('/createkey/:hostname').post(controller.createkey)
    app.route('/deleteKey').get(controller.deleteKey)
    app.route('/getKeys').get(controller.getKeys)
    app.route('/getKeyPair').get(controller.getKeyPair)
}