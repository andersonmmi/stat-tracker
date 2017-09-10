'use strict';
module.exports = function(app) {
  const statsRoutes = require('../controllers/statsController');

  app.route('/api/activities')
    .get(statsRoutes.list_all_activities) //works
    .post(statsRoutes.create_an_activity); //works

  app.route('/api/activities/activity/:activity')
    .get(statsRoutes.read_an_activity); //works

  app.route('/api/activities/id/:id')
    .get(statsRoutes.read_an_activity_by_id) //works
    .put(statsRoutes.update_an_activity) //works
    .delete(statsRoutes.delete_an_activity); //works
};
