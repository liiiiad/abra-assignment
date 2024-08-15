import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapPicker = ({setLatitude,setLongitude,lat,long}) => {
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setLatitude(e.latlng.lat);
        setLongitude(e.latlng.lng);
      },
    });

    return lat === undefined || long === undefined ? null : (
      <Marker position={[lat, long]} />
    );
  };

  return (
    <MapContainer
      center={[32.6046754, 35.28808]}
      zoom={4}
      style={{ height: '10rem', width: '90%',borderRadius: '3px' }}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution='&copy; <a href="https://www.esri.com/en-us/home">Esri</a> contributors'
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapPicker;
