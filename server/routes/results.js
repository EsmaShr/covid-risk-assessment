  const express = require('express');

  const router = express.Router();

  const resultsController = require('../controllers/resultsController');

// route handlers:
//  will receive the Submit event from the frontend when user completes the quiz
//  and send assessment result back to frontend:
router.post('/', resultsController.calculateRisk, (req, res) => {
  res.status(200).send(res.locals);
})

//user signs in and 'get' request loads results
  router.get('/:email' , resultsController.getResults, (req, res) => {
    res.status(200).json(res.locals.userResults);
  })

  router.get('/zip/:email', resultsController.getZip, (req, res) => {
    res.status(200).json(res.locals.zipResults);
  })

  module.exports = router;

