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
  const [location, setLocation] = useState<LatLngTuple>([-15.006,-52.108]);

  const LeafIcon = icon({
    iconUrl: mapIcon,
    iconSize: [40, 53.2],
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
        "rounded-lg xl:h-[calc(100svh-104px)] z-40 [&>.leaflet-container]:shadow-lg [&>.leaflet-container>img]:rounded-lg",
        show ? "block" : "hidden",
      )}
    >
      <MapContainer
        center={location}
        zoom={9}
        zoomControl={false}
        scrollWheelZoom={false}
        dragging={true}
        className="h-full w-full z-40"
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
                <Popup className="w-[320px]! relative">
                  <span className="rounded-tl-xl rounded-br-xl bg-black/50 text-xs text-white absolute top-0 left-0 py-px px-2.5">Fonte: {marker.imageCopy}</span>
                  <img src={marker.image} className="aspect-video h-50 min-w-[320px]! rounded-t-xl object-cover" alt={marker.title} title={marker.title} />
                  <h3
                    className="text-base text-chocolate-700 font-inter font-bold uppercase leading-5 px-4">
                    {marker.title}
                  </h3>
                  <p className="text-sm text-tan-900 text-justify hyphens-auto px-4">
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
