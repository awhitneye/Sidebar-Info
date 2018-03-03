var express = require('express');
var router = express.Router();
var getRestaurantById = require('../../db/controllers/getRestaurantById.js');

router.get('/', (req, res) => {
  var restaurantId = req.query.id;
  getRestaurantById(restaurantId).then((result) => {
    res.send(result);
  });
});

module.exports = router;
