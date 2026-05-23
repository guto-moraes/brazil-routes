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

import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useQueryInteractiveMapLocation } from "@/hooks/queries/custom-posts-queries";
import { ScrollArea } from "./ui/scroll-area";
import ModalContent from "./modal-content";

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

  const handleToggle = () => {
    button.closePopup();
  };

  return (
    <DialogClose
      className={cn(
        "cursor-pointer rounded-sm bg-darkgreen-400 hover:bg-darkgreen-600",
        "text-white py-1.5 px-5 transition-colors! duration-500",
      )}
      onClick={handleToggle}
    >
      Fechar
    </DialogClose>
  );
};

const ButtonOpenPopup = ({ setOpenPopup }: { setOpenPopup: (value: boolean) => void }) => {
  const button = useMap();

  const handleOpenPopup = () => {
    button.closePopup();
    setOpenPopup(true);
  };

  return (
    <Button
      className={cn(
        "border-none bg-darkgreen-500 hover:bg-darkgreen-600 mx-auto mb-6",
        "text-[0.625rem] sm:text-xs font-inter font-semibold uppercase transition-colors duration-500",
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
      scrollWheelZoom={true}
      dragging={true}
      className="h-[calc(100svh-104px)] w-full z-0!"
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
              <Popup className="w-72!">
                <figure className="rounded-t-xl h-30 sm:h-50 w-full relative overflow-hidden">
                  <img
                    src={location.featuredImage.node.guid}
                    className="aspect-video h-full w-full object-cover"
                    alt={location.title}
                    title={location.title}
                  />
                  <figcaption className="rounded-tl-xl rounded-br-xl bg-black/50 text-xs text-white absolute top-0 left-0 py-px px-2.5">
                    Fonte: {location.places.featuredImageCopy}
                  </figcaption>
                </figure>
                <h3 className="text-base max-sm:text-center text-chocolate-700 font-inter font-bold uppercase leading-5 px-4">
                  {location.title}
                </h3>
                <p
                  className="hidden sm:block text-sm text-tan-900 text-justify hyphens-auto max-w-full px-4"
                  dangerouslySetInnerHTML={sanitizedData(location.places.description)}
                />
                <ButtonOpenPopup setOpenPopup={setIsOpen} />
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
      {isOpen && selectedLocation && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogPopup className="max-sm:px-4 lg:min-w-160">
            <DialogHeader className="max-sm:px-0 max-sm:mt-4">
              <DialogTitle className="text-[clamp(1.25rem,5vw,1.85rem)] text-chocolate-700 font-bold uppercase leading-none tracking-tighter">
                {selectedLocation.title}
              </DialogTitle>
            </DialogHeader>
            <DialogPanel className="min-h-[70svh]">
              <ScrollArea className="px-0">
                <ModalContent content={selectedLocation.content} /> 
              </ScrollArea>
            </DialogPanel>
            <DialogFooter>
              <ButtonClosePopup />
            </DialogFooter>
          </DialogPopup>
        </Dialog>
      )}
      <MapResizer />
    </MapContainer>
  );
};

export default Map;
