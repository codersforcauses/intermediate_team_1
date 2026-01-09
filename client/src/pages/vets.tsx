"use client";

import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { ExternalLink,Mail, MapPin, Phone } from "lucide-react";
import Head from "next/head";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { NavigationBar } from "@/components/ui/navigation-bar";
import { useVetClinics, VetClinic } from "@/hooks/vets";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const defaultCenter = {
  lat: -37.8136,
  lng: 144.9631,
};

export default function VetsPage() {
  const [selectedVet, setSelectedVet] = useState<VetClinic | null>(null);
  const { data: vetClinics, isLoading } = useVetClinics();

  // Simple geocoding function - in production, use Google Geocoding API
  const getVetCoordinates = (address: string): { lat: number; lng: number } => {
    // This is a placeholder - in production, you should use Google Geocoding API
    // For now, return default center with small random offset
    // TODO: Use address parameter when implementing actual geocoding
    void address; // Suppress unused variable warning
    const offset = Math.random() * 0.1 - 0.05;
    return {
      lat: defaultCenter.lat + offset,
      lng: defaultCenter.lng + offset,
    };
  };

  const vetLocations = useMemo(() => {
    if (!vetClinics) return [];
    return vetClinics
      .map((vet) => {
        const coords = getVetCoordinates(vet.address);
        return coords ? { vet, coords } : null;
      })
      .filter(
        (
          item,
        ): item is { vet: VetClinic; coords: { lat: number; lng: number } } =>
          item !== null,
      );
  }, [vetClinics]);

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  return (
    <>
      <Head>
        <title>Find Vets - Fetch!</title>
      </Head>
      <NavigationBar />
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-3xl font-bold text-emerald-600">
            Find Nearby Vets
          </h1>

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
                    {vetLocations.map(({ vet, coords }) => (
                      <Marker
                        key={vet.id}
                        position={coords}
                        onClick={() => setSelectedVet(vet)}
                        title={vet.clinicName}
                      />
                    ))}
                    {selectedVet &&
                      vetLocations.find(
                        (item) => item.vet.id === selectedVet.id,
                      ) && (
                        <InfoWindow
                          position={
                            vetLocations.find(
                              (item) => item.vet.id === selectedVet.id,
                            )!.coords
                          }
                          onCloseClick={() => setSelectedVet(null)}
                        >
                          <div className="p-2">
                            <h3 className="font-semibold text-emerald-600">
                              {selectedVet.clinicName}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {selectedVet.address}
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

            {/* Vet List Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Vet Clinics
              </h2>
              {isLoading ? (
                <div className="text-center text-gray-500">Loading vets...</div>
              ) : vetClinics && vetClinics.length > 0 ? (
                <div className="space-y-3">
                  {vetClinics.map((vet) => (
                    <div
                      key={vet.id}
                      className={`cursor-pointer rounded-lg border p-4 transition-all ${
                        selectedVet?.id === vet.id
                          ? "border-emerald-500 bg-emerald-50 shadow-md"
                          : "border-gray-200 bg-white hover:border-emerald-300 hover:shadow"
                      }`}
                      onClick={() => setSelectedVet(vet)}
                    >
                      <h3 className="font-semibold text-gray-800">
                        {vet.clinicName}
                      </h3>
                      <div className="mt-2 space-y-1 text-sm text-gray-600">
                        <div className="flex items-start gap-2">
                          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                          <span>{vet.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                          <span>{vet.phoneNumber}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                          <span>{vet.email}</span>
                        </div>
                      </div>
                      <Button
                        className="mt-3 w-full"
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          // In production, this would link to the vet's booking website
                          window.open(
                            `https://www.google.com/search?q=${encodeURIComponent(vet.clinicName + " booking")}`,
                            "_blank",
                          );
                        }}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Book Appointment
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  No vet clinics found
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
