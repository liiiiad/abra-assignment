import Map from "../../components/Map";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useQuery } from "@tanstack/react-query";
import { getPlaces } from "../../utils/http";
import PlacesList from "../../components/PlacesList";

export default function PlacesPage() {
  const { data, isPending, isError } = useQuery({
    queryFn: getPlaces,
    queryKey: ["places"],
  });
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
      <Box display='flex'>
        <Map data={data} />
        <PlacesList data={data} />
      </Box>
    </>
  );
}
