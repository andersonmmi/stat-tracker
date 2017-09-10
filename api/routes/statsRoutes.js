'use strict';
module.exports = function(app) {
  const statsRoutes = require('../controllers/statsController');

  app.route('/activities')
    .get(statsRoutes.list_all_activities) //works
    .post(statsRoutes.create_an_activity); //works

  app.route('/activities/activity/:activity')
    .get(statsRoutes.read_an_activity); //works

  app.route('/activities/id/:id')
    .get(statsRoutes.read_an_activity_by_id) //works
    .put(statsRoutes.update_an_activity) //works
    .delete(statsRoutes.delete_an_activity); //works

  app.route('/activities/id/:id/stats')
    .post(statsRoutes.create_a_stat);

  app.route('/stats/:id')
    .delete(statsRoutes.delete_a_stat);
};
