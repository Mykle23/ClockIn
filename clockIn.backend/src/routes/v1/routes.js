const express = require('express');
const clientRoute = require('./client.route.js');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/clients',
    route: clientRoute,
  },
];

const devRoutes = [
  {
    path: '/docs',
    // route: docsRoute
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
//FIXME RUN ONLY IN DEV MODE, SET ENV PROD
// devRoutes.forEach((route) => {
//   router.use(route.path, route.route);
// });

module.exports = router;
