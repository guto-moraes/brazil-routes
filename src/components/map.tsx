"use client";

import { useEffect, useState } from "react";
import { icon, type LatLngTuple } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap, ZoomControl } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { cn, sanitizedData } from "@/lib/utils";
import mapIcon from "@/assets/images/pin.png";
import "leaflet/dist/leaflet.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css";
import type { LocationTypes } from "@/types/custom-post-types";

const ChangePositionView = ({ center }: { center: LatLngTuple }) => {
  const map = useMap();

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      map.invalidateSize(); // Force map to recalculate size on container change
    });
    map.flyTo(center); // Or map.flyTo(center, zoom);

    observer.observe(map.getContainer());
    return () => observer.disconnect();
  }, [map, center]); // Dependencies for useEffect
  return null;
};

const ButtonClosePopup = ({ show, setShow }: { show: boolean; setShow: () => void }) => {
  const button = useMap();

  const handleToggle = () => {
    button.closePopup();
    setShow();
  };

  useEffect(() => {
    if (!show) {
      button.closePopup();
    }
  }, [show, button]);

  return (
    <div className="flex justify-center items-center gap-6 -mt-6 mb-4">
      {show ? (
        <button
          className={cn(
            "rounded-2xl bg-white hover:bg-darkgreen-600 border border-darkgreen-500 hover:border-darkgreen-600",
            "text-darkgreen-500 hover:text-white text-xs font-semibold uppercase py-2 px-4  transition-colors duration-300 cursor-pointer",
          )}
          onClick={handleToggle}
        >
          Fechar
        </button>
      ) : (
        <button
          className={cn(
            "rounded-2xl bg-white hover:bg-darkgreen-600 border border-darkgreen-500 hover:border-darkgreen-600",
            "text-darkgreen-500 hover:text-white text-xs font-semibold uppercase py-2 px-4  transition-colors duration-300 cursor-pointer",
          )}
          onClick={setShow}
        >
          Mais Informações
        </button>
      )}
    </div>
  );
};

const Map = ({ locations, show, setShow }: { locations: LocationTypes[]; show: boolean; setShow: () => void }) => {
  const [geoLocation, setGeoLocation] = useState<LatLngTuple>([-15.006, -52.108]);

  const LeafIcon = icon({
    iconUrl: mapIcon,
    iconSize: [40, 53.2],
    iconAnchor: [13, 49],
    popupAnchor: [3, -50],
  });

  return (
    <MapContainer
      center={geoLocation}
      zoom={9}
      zoomControl={false}
      scrollWheelZoom={true}
      dragging={true}
      className="h-full w-full z-40"
    >
      <ZoomControl position="topright" />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contribuidores'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        className="[&.leaflet-attribution-flag]:hidden!"
      />

      <MarkerClusterGroup>
        {locations.map((location: LocationTypes, index: number) => {
          const coordinates = location.places.coordinates.split(",");

          return (
            <>
              <Marker
                key={index}
                position={[Number(coordinates[0]), Number(coordinates[1])]}
                icon={LeafIcon}
                // eventHandlers={{
                //   click: (e) => {
                //     e.originalEvent.preventDefault();
                //     setGeoLocation([Number(coordinates[0]), Number(coordinates[1])]);
                //   },
                // }}
              >
                <Popup className="w-[320px]! relative">
                  <span className="rounded-tl-xl rounded-br-xl bg-black/50 text-xs text-white absolute top-0 left-0 py-px px-2.5">
                    Fonte: {location.places.featuredImageCopy}
                  </span>
                  <img
                    src={location.featuredImage.node.guid}
                    className="aspect-video h-50 min-w-[320px]! rounded-t-xl object-cover"
                    alt={location.title}
                    title={location.title}
                  />
                  <h3 className="text-base text-chocolate-700 font-inter font-bold uppercase leading-5 px-4">
                    {location.title}
                  </h3>
                  <p
                    className="text-sm text-tan-900 text-justify hyphens-auto px-4"
                    dangerouslySetInnerHTML={sanitizedData(location.places.description)}
                  />
                  <ButtonClosePopup show={show} setShow={setShow} />
                </Popup>
              </Marker>
            </>
          );
        })}
      </MarkerClusterGroup>
      <ChangePositionView center={geoLocation} />
    </MapContainer>
  );
};

export default Map;
