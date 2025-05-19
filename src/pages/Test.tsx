// components/MapView.tsx
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

const FlyToMarkers = () => {
  const map = useMap();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const cities = [
    {
      name: "서울",
      latlng: [37.5665, 126.978],
      text: "서울 시청 - 여행 시작!",
    },
    {
      name: "부산",
      latlng: [35.1796, 129.0756],
      text: "부산 해운대 - 둘째 날",
    },
    {
      name: "제주",
      latlng: [33.4996, 126.5312],
      text: "제주 공항 - 마지막 날",
    },
  ];

  const handleClick = (city: (typeof cities)[0]) => {
    map.flyTo(city.latlng, 12, {
      duration: 1.5,
    });
    setSelectedCity(city.name);
  };

  return (
    <>
      {cities.map((city, i) => (
        <Marker
          key={i}
          position={city.latlng}
          eventHandlers={{ click: () => handleClick(city) }}
        >
          <Popup>{city.text}</Popup>
        </Marker>
      ))}

      <Polyline
        positions={cities.map((c) => c.latlng)}
        pathOptions={{ color: "orange", weight: 4, opacity: 0.7 }}
      />

      {selectedCity && (
        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md text-sm z-[1000]">
          현재 선택한 도시: <strong>{selectedCity}</strong>
        </div>
      )}
    </>
  );
};

export default function MapView() {
  return (
    <div className="w-full max-w-4xl h-[500px] mx-auto mt-10 rounded-xl border border-gray-200 shadow-lg overflow-hidden relative">
      <MapContainer
        center={[37.5665, 126.978]}
        zoom={6}
        scrollWheelZoom={true}
        className="z-0 w-full h-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <FlyToMarkers />
      </MapContainer>
    </div>
  );
}
