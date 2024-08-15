import Map from "../../components/Map";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useQuery } from "@tanstack/react-query";
import { getPlaces, getPlaceWeather } from "../../utils/http";
import PlacesList from "../../components/PlacesList";
import { useEffect, useState } from "react";

export default function PlacesPage() {
  const [mapCenter, setMapCenter] = useState([32.6046754, 35.28808]);
  const [placeToFetchWeather, setPlaceToFetchWeather] = useState();

  const { data, isPending, isError } = useQuery({
    queryFn: () => getPlaces({ sort: { createdAt: 1 } }),
    queryKey: ["places"],
  });

  const { weatherData, isWeatherPending, refetch, weatherError } = useQuery({
    queryFn: () => getPlaceWeather(placeToFetchWeather),
    queryKey: ["weather", placeToFetchWeather],
    enabled: false,
  });

  const handleClickPlace = (place) => {
    setPlaceToFetchWeather(place);
    setMapCenter([place.lat, place.long]);
  };

  useEffect(() => {
    if(placeToFetchWeather){
        refetch();
    }
  },[placeToFetchWeather]);

  return (
    <>
      <Typography variant="h6" paddingBottom={3} textAlign="left">
        Places
      </Typography>
      {isError && (
        <Typography varient="body1">
          Failed fetching places. Try again later!
        </Typography>
      )}
      <Box display="flex">
        <Map data={data} mapCenter={mapCenter} />
        <PlacesList data={data} onClickPlace={handleClickPlace} />
      </Box>
    </>
  );
}
