import { useQuery } from "@tanstack/react-query";

type WeightType = {
  weight: number;
  date: Date;
};

export function useWeightRecords() {
  return useQuery<WeightType[]>({
    queryKey: ["records"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8080/records");
      return response.json();
    },
  });
}
