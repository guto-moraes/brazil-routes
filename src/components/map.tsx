"use client";

import { useEffect, useState } from "react";
import { icon } from "leaflet";
import type { LatLngTuple } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap, ZoomControl } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useQueryInteractiveMapLocation } from "@/hooks/queries/custom-posts-queries";
import { cn, sanitizedData } from "@/lib/utils";
import mapIcon from "@/assets/images/pin.png";
import type { LocationTypes } from "@/types/custom-post-types";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Article from "./article";

import "leaflet/dist/leaflet.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css";

const multiToggle = (element: HTMLElement, ...classes: string[]) => {
  classes.forEach((cls) => element.classList.toggle(cls));
};

const MapResizer = () => {
  const map = useMap();

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      map.invalidateSize();
      return () => map.remove();
    });

    observer.observe(map.getContainer());
    return () => {
      observer.disconnect();
    };
  }, [map]);

  return null;
};

const ButtonClosePopup = () => {
  const button = useMap();
  const body = document.body;

  const handleToggle = () => {
    button.closePopup();
    multiToggle(body, "fixed", "inset-0");
  };

  return (
    <DialogClose
      className={cn(
        "rounded-xs bg-darkgreen-400 hover:bg-darkgreen-500 text-white hover:text-white",
        "text-xs uppercase h-6 w-max px-4 transition-colors duration-300 cursor-pointer",
      )}
      onClick={handleToggle}
    >
      Fechar
    </DialogClose>
  );
};

const ButtonOpenPopup = ({ setOpenPopup }: { setOpenPopup: (value: boolean) => void }) => {
  const button = useMap();
  const body = document.body;

  const handleOpenPopup = () => {
    button.closePopup();
    setOpenPopup(true);
    multiToggle(body, "fixed", "inset-0");
  };

  return (
    <Button
      className={cn(
        "rounded-xs bg-darkgreen-400 hover:bg-darkgreen-500 text-white hover:text-white",
        "text-xs uppercase h-6 transition-colors duration-300 cursor-pointer",
      )}
      onClick={handleOpenPopup}
    >
      Mais informações
    </Button>
  );
};

const Map = ({ locations }: { locations: LocationTypes[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [locationId, setLocationId] = useState<string>("");
  const [geoLocation, setGeoLocation] = useState<LatLngTuple>([-15.006, -52.108]);
  const { location: selectedLocation } = useQueryInteractiveMapLocation(locationId).data || {};

  const LeafIcon = icon({
    iconUrl: mapIcon,
    iconSize: [40, 53.2],
    iconAnchor: [13, 49],
    popupAnchor: [3, -50],
  });

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("h-svh");
    } else {
      document.body.classList.remove("h-svh");
    }
  }, [isOpen]);

  return (
    <MapContainer
      center={geoLocation}
      zoom={9}
      zoomControl={false}
      scrollWheelZoom={false}
      dragging={true}
      className="h-[calc(100svh-104px)] w-full z-0! dark:bg-dark-800"
    >
      <ZoomControl position="topright" />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contribuidores'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        className={cn(
          "dark:invert-100! dark:grayscale! dark:saturate-250! dark:contrast-100! dark:hue-rotate-180!"
        )}
      />

      <MarkerClusterGroup>
        {locations.map((location: LocationTypes, index: number) => {
          const coordinates = location.places.coordinates.split(",");

          return (
            <Marker
              key={index}
              position={[Number(coordinates[0]), Number(coordinates[1])]}
              icon={LeafIcon}
              eventHandlers={{
                click: (e) => {
                  e.originalEvent.preventDefault();
                  setGeoLocation([Number(coordinates[0]), Number(coordinates[1])]);
                  setLocationId(location.id);
                },
              }}
            >
              <Popup className="w-max! p-0!">
                <div className="w-full max-w-full sm:w-120 sm:max-w-120 flex flex-col sm:flex-row p-4">
                  <figure className="rounded-t-xl sm:rounded-tr-none sm:rounded-s-xl min-h-48 sm:min-w-48 overflow-hidden">
                    <img
                      className="h-full w-full object-cover object-center"
                      src={location.featuredImage.node.guid}
                      alt={location.title}
                    />
                  </figure>
                  <div className="min-h-64 sm:min-w-64 pt-4 sm:pt-0 sm:pl-4 flex flex-col justify-between gap-y-3">
                    <h2 className="text-xl text-bone-700 dark:text-dark-contrast-100 font-bold leading-[1.2] tracking-tighter line-clamp-2 mr-4">
                      {location.title}
                    </h2>
                    <div className="max-w-full dark:text-white" dangerouslySetInnerHTML={sanitizedData(location.places.description)} />
                    <ButtonOpenPopup setOpenPopup={setIsOpen} />
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
      {isOpen && selectedLocation && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-sm:px-4 lg:min-w-160 max-h-[90%] dark:bg-dark-950 dark:border-dark-950">
            <DialogHeader className="max-sm:px-0 max-sm:mt-4">
              <DialogTitle
                className={cn(
                  "text-[clamp(1.25rem,5vw,1.85rem)] text-chocolate-700 dark:text-dark-contrast-100",
                  "font-bold uppercase leading-none tracking-tighter max-w-[90%]",
                )}
              >
                {selectedLocation.title}
              </DialogTitle>
            </DialogHeader>
            <div className="-mx-4 max-h-[65svh] overflow-y-auto px-4 scrollbar-thumb-darkgreen-500 scrollbar-thin">
              <Article content={selectedLocation.content} />
            </div>
            <DialogFooter>
              <ButtonClosePopup />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      <MapResizer />
    </MapContainer>
  );
};

export default Map;
