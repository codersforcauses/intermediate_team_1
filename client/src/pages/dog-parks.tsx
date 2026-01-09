"use client";

import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { MapPin, Star, StarOff } from "lucide-react";
import Head from "next/head";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { NavigationBar } from "@/components/ui/navigation-bar";
import {
  DogPark,
  useDogParks,
  useSavedDogParks,
  useSaveDogPark,
  useUnsaveDogPark,
} from "@/hooks/dog-parks";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const defaultCenter = {
  lat: -37.8136,
  lng: 144.9631,
};

export default function DogParksPage() {
  const [selectedPark, setSelectedPark] = useState<DogPark | null>(null);
  const { data: dogParks, isLoading } = useDogParks();
  const { data: savedParks } = useSavedDogParks();
  const savePark = useSaveDogPark();
  const unsavePark = useUnsaveDogPark();

  // Get saved park IDs
  const savedParkIds = useMemo(() => {
    return new Set(savedParks?.map((sp) => sp.parkId.id) || []);
  }, [savedParks]);

  // Simple geocoding function - in production, use Google Geocoding API
  const getParkCoordinates = (park: DogPark): { lat: number; lng: number } => {
    // This is a placeholder - in production, you should use Google Geocoding API
    // For now, return default center with small random offset
    // TODO: Use park parameter when implementing actual geocoding
    void park; // Suppress unused variable warning
    const offset = Math.random() * 0.1 - 0.05;
    return {
      lat: defaultCenter.lat + offset,
      lng: defaultCenter.lng + offset,
    };
  };

  const parkLocations = useMemo(() => {
    if (!dogParks) return [];
    return dogParks
      .map((park) => {
        const coords = getParkCoordinates(park);
        return coords ? { park, coords } : null;
      })
      .filter(
        (
          item,
        ): item is { park: DogPark; coords: { lat: number; lng: number } } =>
          item !== null,
      );
  }, [dogParks]);

  const handleToggleBookmark = (park: DogPark) => {
    if (savedParkIds.has(park.id)) {
      // Find saved park entry and unsave it
      const savedPark = savedParks?.find((sp) => sp.parkId.id === park.id);
      if (savedPark) {
        unsavePark.mutate(savedPark.id);
      }
    } else {
      // Save the park
      // In production, get userName from auth context
      savePark.mutate({ userName: "current_user", parkId: park.id });
    }
  };

  const formatAddress = (park: DogPark): string => {
    return `${park.streetNo} ${park.streetName}, ${park.suburb}, ${park.state} ${park.postcode}, ${park.country}`;
  };

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  return (
    <>
      <Head>
        <title>Walking Locations - Fetch!</title>
      </Head>
      <NavigationBar />
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-emerald-600">
              Walking Locations
            </h1>
            <div className="text-sm text-gray-600">
              {savedParks && savedParks.length > 0 && (
                <span>
                  {savedParks.length} saved location
                  {savedParks.length !== 1 ? "s" : ""}
                </span>
              )}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Map Section */}
            <div className="lg:col-span-2">
              {googleMapsApiKey ? (
                <LoadScript googleMapsApiKey={googleMapsApiKey}>
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={defaultCenter}
                    zoom={12}
                  >
                    {parkLocations.map(({ park, coords }) => (
                      <Marker
                        key={park.id}
                        position={coords}
                        onClick={() => setSelectedPark(park)}
                        title={park.parkName}
                        icon={
                          savedParkIds.has(park.id)
                            ? {
                                path: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
                                fillColor: "#fbbf24",
                                fillOpacity: 1,
                                strokeColor: "#f59e0b",
                                strokeWeight: 2,
                                scale: 0.8,
                              }
                            : undefined
                        }
                      />
                    ))}
                    {selectedPark &&
                      parkLocations.find(
                        (item) => item.park.id === selectedPark.id,
                      ) && (
                        <InfoWindow
                          position={
                            parkLocations.find(
                              (item) => item.park.id === selectedPark.id,
                            )!.coords
                          }
                          onCloseClick={() => setSelectedPark(null)}
                        >
                          <div className="p-2">
                            <h3 className="font-semibold text-emerald-600">
                              {selectedPark.parkName}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {formatAddress(selectedPark)}
                            </p>
                          </div>
                        </InfoWindow>
                      )}
                  </GoogleMap>
                </LoadScript>
              ) : (
                <div className="flex h-[600px] items-center justify-center rounded-lg border bg-white">
                  <p className="text-gray-500">
                    Google Maps API key not configured. Please set
                    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                  </p>
                </div>
              )}
            </div>

            {/* Park List Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">
                  Dog Parks
                </h2>
              </div>
              {isLoading ? (
                <div className="text-center text-gray-500">
                  Loading parks...
                </div>
              ) : dogParks && dogParks.length > 0 ? (
                <div className="space-y-3">
                  {dogParks.map((park) => {
                    const isSaved = savedParkIds.has(park.id);
                    return (
                      <div
                        key={park.id}
                        className={`cursor-pointer rounded-lg border p-4 transition-all ${
                          selectedPark?.id === park.id
                            ? "border-emerald-500 bg-emerald-50 shadow-md"
                            : "border-gray-200 bg-white hover:border-emerald-300 hover:shadow"
                        }`}
                        onClick={() => setSelectedPark(park)}
                      >
                        <div className="flex items-start justify-between">
                          <h3 className="flex-1 font-semibold text-gray-800">
                            {park.parkName}
                          </h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="ml-2 h-8 w-8 p-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleToggleBookmark(park);
                            }}
                            title={
                              isSaved ? "Remove from saved" : "Save location"
                            }
                          >
                            {isSaved ? (
                              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ) : (
                              <StarOff className="h-5 w-5 text-gray-400" />
                            )}
                          </Button>
                        </div>
                        <div className="mt-2 space-y-1 text-sm text-gray-600">
                          <div className="flex items-start gap-2">
                            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                            <span>{formatAddress(park)}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  No dog parks found
                </div>
              )}

              {/* Saved Parks Section */}
              {savedParks && savedParks.length > 0 && (
                <div className="mt-8 space-y-3">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Saved Locations
                  </h2>
                  {savedParks.map((savedPark) => {
                    const park = savedPark.parkId;
                    return (
                      <div
                        key={savedPark.id}
                        className="rounded-lg border border-yellow-200 bg-yellow-50 p-4"
                      >
                        <div className="flex items-start justify-between">
                          <h3 className="flex-1 font-semibold text-gray-800">
                            {park.parkName}
                          </h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="ml-2 h-8 w-8 p-0"
                            onClick={() => unsavePark.mutate(savedPark.id)}
                            title="Remove from saved"
                          >
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          </Button>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          <div className="flex items-start gap-2">
                            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                            <span>{formatAddress(park)}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
