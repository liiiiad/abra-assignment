const Place = require("../models/place");
const axios = require("axios");

const createPlace = async (placeData) => {
  const place = new Place(placeData);
  return await place.save();
};

const getPlaces = async (filter) => {
  return await Place.find(filter);
};

const getPlaceWeather = async (lat, long) => {
  const api_url = "https://api.openweathermap.org/data/2.5/weather";
  try {
    const res = await axios.get(api_url, {
      params: {
        lat,
        lon: long,
        appid: "45017ea56ecca68d10012b50cec53ea5",
        units: "metric",
      },
    });
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch weather data " + error);
  }
};

module.exports = { createPlace, getPlaces, getPlaceWeather };
