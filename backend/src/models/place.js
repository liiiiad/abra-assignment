const mongoose = require("mongoose");
const addressValidator = require('address-validator');

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
        required: true,
        trim: true,
        validate(value){
            //add validation logic
        }
    }
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
