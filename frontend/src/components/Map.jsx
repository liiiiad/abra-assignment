import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Typography from "@mui/material/Typography";
import "leaflet/dist/leaflet.css";

export default function Map({data}) {

  return (
      <MapContainer
        center={[32.6046754, 35.28808]}
        zoom={2}
        style={{
          height: "30rem",
          width: "100%",
          borderRadius: "10px",
          marginRight: "2rem",
        }}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy; <a href="https://www.esri.com/en-us/home">Esri</a> contributors'
        />
        {/* {data &&
          data.map((place) => (
            <Marker
              key={place._id}
              position={[place.address]}
              eventHandlers={{
                click: () => {
                },
              }}
            />
          ))} */}
      </MapContainer>
  );
}
