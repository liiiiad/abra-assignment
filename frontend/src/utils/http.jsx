import axios from "axios";

const url = "http://localhost:3000/api";

export const createPlace = async (data) => {
  const res = await axios.post(`${url}/place`, data);
  return res.data;
};

export const getPlaces = async (queryTerm) => {
  const res = await axios.get(`${url}/place`, {
    params: queryTerm,
  });
  return res.data;
};

export const getPlaceWeather = async (place) => {
  const {lat,long} = place;
  
  const res = await axios.get(`${url}/place/weather`, {
    params: {
      lat,
      long
    }
  })
  return res.data;
};
