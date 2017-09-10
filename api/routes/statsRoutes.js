'use strict';
module.exports = function(app) {
  const statsRoutes = require('../controllers/statsController');

  app.route('/activities')
    .get(statsRoutes.list_all_activities)
    .post(statsRoutes.create_an_activity);

  app.route('/activities/:activity')
    .get(statsRoutes.read_an_activity)
    .put(statsRoutes.update_an_activity)
    .delete(statsRoutes.delete_an_activity);

  app.route('/activities/{_id}/stats')
    .post(statsRoutes.create_a_stat);

  app.route('/stats/:id')
    .delete(statsRoutes.delete_a_stat);
};
