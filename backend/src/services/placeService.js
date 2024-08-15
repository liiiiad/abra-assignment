const Place = require("../models/place");

const createPlace = async (placeData) => {
  const place = new Place(placeData);
  return await place.save();
};

const getPlaces = async (filter) => {
    return await Place.find(filter);
  };
  

module.exports = {createPlace, getPlaces};
