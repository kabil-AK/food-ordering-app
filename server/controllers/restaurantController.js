// server/controllers/restaurantController.js
const Restaurant = require("../models/Restaurant");

const getRestaurants = async (req, res) => {
  try {
    const { cuisine, location, priceRange } = req.query;
    const query = {};

    if (cuisine) query.cuisine = cuisine;
    if (location) query.location = location;
    if (priceRange) query.priceRange = priceRange;

    const restaurants = await Restaurant.find(query);
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getRestaurants };
