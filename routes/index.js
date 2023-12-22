const express = require('express');

const usersRouter = require('./usersRouter');

const router = express.Router();



router.use('/person', usersRouter);



module.exports = router;