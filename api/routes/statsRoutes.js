'use strict';
module.exports = function(app) {
  const todoList = require('../controllers/statsController');

  app.route('/activities')
    .get()
    .post();

  app.route('activities/:id')
    .get()
    .put()
    .delete();

  app.route('/activities/:id/stats')
    .post();

  app.route('/stats/:id')
    .delete();
};
