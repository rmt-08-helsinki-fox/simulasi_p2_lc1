const router = require('express').Router();
const authRoutes = require('./authzRouter');

router.use(authRoutes);

module.exports = router;