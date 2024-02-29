import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import RoutingMachine from "./RoutineMachine";

const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/6565/6565893.png",
  iconSize: [25, 35],
  iconAnchor: [5, 30],
});

export default function Map() {
  const [markerPosition, setMarkerPosition] = useState<[number, number]>([
    0, 0,
  ]);
  const [mapCenter, setMapCenter] = useState<[number, number]>([
    27.7088, 85.3241,
  ]);

  const refMachine = useRef<any>(null);
  const firstPos = useRef<HTMLInputElement>(null);
  const secondPos = useRef<HTMLInputElement>(null);

  const [firPos, setFirPos] = useState<[number, number]>([27.7085, 85.3205]);
  const [secPos, setSecPos] = useState<[number, number]>([27.6767, 85.3167]);

  useEffect(() => {
    refMachine.current?.setWaypoints([
      L.latLng(firPos[0], firPos[1]),
      L.latLng(secPos[0], secPos[1]),
    ]);
  }, [firPos, secPos]);

  const submitHandler = (e) => {
    console.log("submitHandler");
    e.preventDefault();

    searchPlace(firstPos.current.value, function (place) {
      if (place) {
        console.log(`first Found place: ${place.display_name}`);
        console.log(`first Coordinates: ${place.lat}, ${place.lon}`);
        setFirPos([place.lat, place.lon]);
      } else {
        console.log("first place not found.");
      }
    });

    searchPlace(secondPos.current.value, function (place) {
      if (place) {
        console.log(`sec Found place: ${place.display_name}`);
        console.log(`sec Coordinates: ${place.lat}, ${place.lon}`);
        setMarkerPosition([place.lat, place.lon]);
        setMapCenter([place.lat, place.lon]);
        setSecPos([place.lat, place.lon]);
      } else {
        console.log("second place not found.");
      }
    });
  };
  useEffect(() => {}, []);

  useEffect(() => {
    setMapCenter(markerPosition);
  }, [markerPosition]);
  console.log("pepe" + firPos, secPos);
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input ref={firstPos} defaultValue={"Lalitpur Nepal"} />
        <input ref={secondPos} defaultValue={"Kathmandu"} />
        <button onClick={submitHandler}>Submit</button>
      </form>

      <p>
        Submit Value:{" "}
        <b>
          {firstPos.current?.value} to {secondPos.current?.value}
        </b>
      </p>

      <div id="map" className="w-full h-screen bg-green-200">
        <MapContainer
          center={mapCenter}
          zoom={15}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={markerIcon} position={markerPosition}>
            <Popup>TEST</Popup>
          </Marker>

          <RoutingMachine
            ref={refMachine}
            firstPosition={firPos}
            secondPosition={secPos}
          />
        </MapContainer>
      </div>
    </div>
  );
}

function searchPlace(query: string, callback: (place: any) => void) {
  const url = `https://nominatim.openstreetmap.org/search.php?q=${query}&format=json`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const place = data[0];
      if (place) {
        callback(place);
      } else {
        callback(null);
      }
    })
    .catch((error) => {
      console.error("Error fetching place:", error);
      callback(null);
    });
}
