// server route /
const router = require('express').Router();
const apiRoutes = require('./api');
router.use('/api', apiRoutes); //routes to /api
module.exports = router;
