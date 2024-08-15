import { MapContainer, TileLayer, Marker,useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({data, mapCenter}) {

  const ChangeView = ({center}) => {
    const map = useMap();
    map.setView(center);
    return null;
  }

  return (
      <MapContainer
        center={mapCenter}
        zoom={5}
        style={{
          height: "30rem",
          width: "100%",
          borderRadius: "10px",
          marginRight: "2rem",
        }}
      >
        <ChangeView center={mapCenter}/>
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy; <a href="https://www.esri.com/en-us/home">Esri</a> contributors'
        />
        {data &&
          data.map((place) => (
            <Marker
              key={place._id}
              position={[place.lat,place.long]}
              eventHandlers={{
                click: () => {
                },
              }}
            />
          ))}
      </MapContainer>
  );
}
