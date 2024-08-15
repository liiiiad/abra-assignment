const express = require("express");
const {createPlace, getPlaces, getPlaceWeather} = require("../controllers/placeController");

const router = new express.Router();

router.post("/api/place", createPlace);
router.get("/api/place", getPlaces);
router.get("/api/place/weather", getPlaceWeather)

module.exports = router;
