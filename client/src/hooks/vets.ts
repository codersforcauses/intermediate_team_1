import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import api from "@/lib/api";

export interface VetClinic {
  id: number;
  clinicName: string;
  phoneNumber: string;
  email: string;
  address: string;
}

export const useVetClinics = (
  args?: Omit<UseQueryOptions<VetClinic[]>, "queryKey" | "queryFn">,
) => {
  return useQuery({
    ...args,
    queryKey: ["vet-clinics"],
    queryFn: () =>
      api.get<VetClinic[]>("/api/vet/clinics/").then((res) => res.data),
  });
};

export const useVetClinic = (
  id: number,
  args?: Omit<UseQueryOptions<VetClinic>, "queryKey" | "queryFn">,
) => {
  return useQuery({
    ...args,
    queryKey: ["vet-clinic", id],
    queryFn: () =>
      api.get<VetClinic>(`/api/vet/clinics/${id}/`).then((res) => res.data),
    enabled: !!id,
  });
};
