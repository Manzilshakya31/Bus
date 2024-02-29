import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props: {
  firstPosition: number[];
  secondPosition: number[];
}) => {
  console.log(props);
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(props.firstPosition[0], props.firstPosition[1]),
      L.latLng(props.secondPosition[0], props.secondPosition[1]),
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }],
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
