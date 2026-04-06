"use client";

import { useEffect, useState } from "react";
import { icon, type LatLngTuple } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap, ZoomControl } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { cn } from "@/lib/utils";
import mapIcon from "@/assets/images/pin.png";
import "leaflet/dist/leaflet.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css";
import type { MapTypes } from "@/types/data-types";

const ChangePositionView = ({ center }: { center: LatLngTuple }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center); // Or map.flyTo(center, zoom);
  }, [center, map]); // Dependencies for useEffect
  return null;
};

const Map = ({ markers, show }: { markers: MapTypes[], show: boolean }) => {
  const [location, setLocation] = useState<LatLngTuple>([-15.2287428,-52.1229742]);

  const LeafIcon = icon({
    iconUrl: mapIcon,
    iconSize: [33, 50],
    iconAnchor: [13, 49],
    popupAnchor: [3, -50],
  });

  /** Event hover to show popup */
  // const handleOnMouse = useMemo(
  //     () => ({
  //         mouseover(e: { target: { openPopup: () => void } }) {
  //             e.target.openPopup();
  //         },
  //         mouseout(e: { target: { closePopup: () => void } }) {
  //             e.target.closePopup();
  //         }
  //     }),
  //     []
  // );

  return (
    <div
      className={cn(
        "rounded-lg [&>.leaflet-container]:rounded-lg z-40",
        "[&>.leaflet-container]:shadow-lg [&>.leaflet-container>img]:rounded-lg",
        show ? "block" : "hidden",
      )}
    >
      <MapContainer
        center={location}
        zoom={10}
        zoomControl={false}
        scrollWheelZoom={false}
        dragging={true}
        className="rounded-lg xl:h-250 w-full z-40"
      >
        <ZoomControl position="topright" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contribuidores'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="[&>.leaflet-attribution-flag]:hidden!"
        />

        <MarkerClusterGroup>
          {markers.map((marker: MapTypes, index: number) => {
            const coordinates = marker.coordinates;

            return (
              <Marker
                key={index}
                position={coordinates}
                icon={LeafIcon}
                eventHandlers={{
                  mouseover: () => setLocation(coordinates),
                }}
              >
                <Popup className="flex! flex-col!">
                  <img src={marker.image} className="rounded-md w-full object-cover" alt={marker.title} title={marker.title} />
                  <h3
                    className="text-lg text-chocolate-700 font-inter font-bold uppercase leading-6 mt-6">
                    {marker.title}
                  </h3>
                  <p className="text-sm text-tan-900 text-justify hyphens-auto">
                      {marker.description}
                  </p>
                </Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
        <ChangePositionView center={location} />
      </MapContainer>
    </div>
  );
};

export default Map;
