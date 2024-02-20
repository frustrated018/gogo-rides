import VehicleCard from "@/components/vehicle-card/vehicle-card";

const VehicleGrid = ({ data }) => {
  return (
   <section className="my-5 xl:my-10 mx-0 xl:mx-5">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-10">
      {data.map((vehicle, index) => {
        return <VehicleCard key={index} vehicle={vehicle} />;
      })}
    </div>
   </section>
  );
};

export default VehicleGrid;
