const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      capitalize: true,
    },
    type: {
        type: String,
        enum: ['Restaurant', 'Hotel', 'Park'],
        required: true
    },
    address: {
        type: String,
        trim: true,
    },
    lat: {
      type: Number,
      required: true,
      validate(value) {
        if (value < -90 || value > 90) {
          throw new Error('Latitude must be between -90 and 90 degrees');
        }
      }
    },
    long: {
      type: Number,
      required: true,
      validate(value) {
        if (value < -180 || value > 180) {
          throw new Error('Longitude must be between -180 and 180 degrees');
        }
      }
    }
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
