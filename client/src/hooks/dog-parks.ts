import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";

import api from "@/lib/api";

export interface DogPark {
  id: number;
  parkName: string;
  streetNo: string;
  streetName: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
}

export interface SavedDogPark {
  id: number;
  userName: string;
  parkId: DogPark;
}

export const useDogParks = (
  args?: Omit<UseQueryOptions<DogPark[]>, "queryKey" | "queryFn">,
) => {
  return useQuery({
    ...args,
    queryKey: ["dog-parks"],
    queryFn: () =>
      api.get<DogPark[]>("/api/dog/parks/").then((res) => res.data),
  });
};

export const useDogPark = (
  id: number,
  args?: Omit<UseQueryOptions<DogPark>, "queryKey" | "queryFn">,
) => {
  return useQuery({
    ...args,
    queryKey: ["dog-park", id],
    queryFn: () =>
      api.get<DogPark>(`/api/dog/parks/${id}/`).then((res) => res.data),
    enabled: !!id,
  });
};

export const useSavedDogParks = (
  args?: Omit<UseQueryOptions<SavedDogPark[]>, "queryKey" | "queryFn">,
) => {
  return useQuery({
    ...args,
    queryKey: ["saved-dog-parks"],
    queryFn: () =>
      api.get<SavedDogPark[]>("/api/dog/saved/").then((res) => res.data),
  });
};

export const useSaveDogPark = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { userName: string; parkId: number }) =>
      api.post<SavedDogPark>("/api/dog/saved/", data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["saved-dog-parks"] });
    },
  });
};

export const useUnsaveDogPark = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => api.delete(`/api/dog/saved/${id}/`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["saved-dog-parks"] });
    },
  });
};
