import { CartesianGrid, Line, LineChart, YAxis } from "recharts";
import { useWeightRecords } from "../hooks/useWeightRecords";

export function WeightList() {
  const { isPending, isError, data, error } = useWeightRecords();

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <LineChart width={400} height={200} data={data}>
      <Line type="monotone" dataKey="weight" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <YAxis domain={["dataMin - 20", "dataMax + 20"]} />
    </LineChart>
  );
}
