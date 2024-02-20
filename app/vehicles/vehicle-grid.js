"use client";
import VehicleCard from "@/components/vehicle-card/vehicle-card";

const VehicleGrid = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((vehicle, index) => {
        return <VehicleCard key={index} vehicle={vehicle} />;
      })}
    </div>
  );
};

export default VehicleGrid;
