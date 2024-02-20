import NavHome from "@/components/nav-home/navHome";
import { dummyCarData } from "@/database/dummy-data";
import VehicleGrid from "./vehicle-grid";

const Vehicles = () => {
  //! fetch Data form db and pass it down there

  const data = dummyCarData;

  return (
    <>
      <NavHome />
      <section className="min-h-screen">
        <h2 className="text-lg md:text-xl xl:text-4xl ml-5 mt-10">
          Total Vehicles listed for sale: ({data.length})
        </h2>
        {/* //TODO: maybe add some filtering options and search? */}

        {/* Mapping and showing cards */}
        <VehicleGrid data={data} />
      </section>
    </>
  );
};

export default Vehicles;
