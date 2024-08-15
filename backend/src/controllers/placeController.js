const placeService = require("../services/placeService");

const createPlace = async (req, res) => {
  try {
    const user = await placeService.createPlace(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPlaces = async (req, res) => {
  const filter = {};
  const { type } = req.query;
  if (type) {
    filter.type = type;
  }
  try {
    const places = await placeService.getPlaces(filter);
    res.json(places);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPlaceWeather = async (req, res) => {
  try {
    const weather = await placeService.getPlaceWeather(
      req.query.lat,
      req.query.long
    );
    res.json({weather})

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createPlace, getPlaces, getPlaceWeather };
