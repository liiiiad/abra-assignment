const express = require("express");
const {createPlace, getPlaces} = require("../controllers/placeController");

const router = new express.Router();

router.post("/api/place", createPlace);
router.get("/api/place", getPlaces);

module.exports = router;
