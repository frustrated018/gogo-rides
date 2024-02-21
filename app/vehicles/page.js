import NavHome from "@/components/Home/nav-home/navHome";
import VehicleGrid from "./vehicle-grid";
import { findAllVehicles } from "@/actions/vehicles-actions";
import FooterHome from "@/components/Home/footer-home/footerHome";

const Vehicles = async () => {
  let data = [];
  try {
    data = await findAllVehicles();
    // console.log("Data fetched successfully:", data);
  } catch (error) {
    console.error("Error fetching vehicle data:", error);
    // Handle the error here.. Maybe display an error message to the user
  }

  return (
    <>
      <section className="min-h-screen">
        <h2 className="text-lg md:text-xl xl:text-4xl ml-5 mt-10">
          Total Vehicles listed for sale: ({data.length})
        </h2>
        {/* //TODO: maybe add some filtering options and search? */}
        {data.length > 0 ? (
          <VehicleGrid data={data} />
        ) : (
          <h2>No vehicles available</h2>
        )}
        {/* Mapping and showing cards */}
      </section>
    </>
  );
};

export default Vehicles;
