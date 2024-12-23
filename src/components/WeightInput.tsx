import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

type WeightInputTypes = {
  weight: number;
  date: Date;
};

type WeightRecord = {
  weight: number;
  date: string;
};

export function WeightInput() {
  const { register, handleSubmit } = useForm<WeightInputTypes>();

  async function addWeightRecord(record: WeightRecord) {
    await fetch("http://localhost:8080/records", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(record),
    });
  }

  const mutation = useMutation({
    mutationFn: addWeightRecord,
  });

  function onSubmit(data: WeightInputTypes) {
    mutation.mutate({
      weight: data.weight,
      date: new Date(data.date).toISOString(),
    });
  }

  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="p-2 w-full">
          <input
            {...register("weight")}
            type="number"
            placeholder="Weight"
            className="input input-bordered w-full"
          />
        </div>
        <div className="p-2 w-full">
          <input
            {...register("date")}
            type="date"
            className="input input-bordered w-full"
            value={new Date().toISOString().substring(0, 10)}
          />
        </div>
        <div className="flex w-full justify-end">
          <button className="btn justify-end m-1">Submit</button>
          <NavLink to="/">
            <button className="btn m-1">Cancel</button>
          </NavLink>
        </div>
      </form>
      <div>
        {mutation.isPending ? (
          "Adding Weight Record..."
        ) : (
          <>
            {mutation.isError ? (
              <div>An error occurred: {mutation.error.message}</div>
            ) : null}

            {mutation.isSuccess ? <div>Weight Record added.</div> : null}
          </>
        )}
      </div>
    </div>
  );
}
