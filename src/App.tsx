import "./App.css";
import Navbar from "./Navbar/navbar";
import PopBox from "./components/PopBox";
import Map from "./components/Map";
// import Navbar from "./Navbar/navbar";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="flex">
          <div>
            <Navbar />
          </div>
          <div id="map" className="w-full h-screen bg-green-200">
            <Map
              location={{
                latitude: 27.7088,
                longitude: 85.3241,
                display_name: "Kathmandu",
              }}
            />
          </div>
        </div>
        <div className="mt-[15%] flex justify-center w-full z-100 top-0 absolute">
          <PopBox />
        </div>
      </div>
    </>
  );
}

export default App;
