import { NavLink } from "react-router-dom";
import { WeightList } from "./WeightList";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl">Weight Recorder</h1>
      <WeightList />
      <NavLink to="/weight-input">
        <button className="btn">Enter Weight</button>
      </NavLink>
    </div>
  );
}
