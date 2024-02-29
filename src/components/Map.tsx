import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
// import markerIconURL from "/home/sandip/Documents/Bus/src/assets/react.svg";

const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/6565/6565893.png",
  iconSize: [25, 35],
  iconAnchor: [5, 30],
});

interface Location {
  latitude: number;
  longitude: number;
  display_name: string;
}

interface Props {
  location: Location;
}

export default function Map({ location }: Props) {
  return (
    <MapContainer
      center={[27.7088, 85.3241]}
      zoom={15}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        icon={markerIcon}
        position={[location.latitude, location.longitude]}
      >
        <Popup>{location.display_name}</Popup>
      </Marker>
    </MapContainer>
  );
}
