import connect from "@/database/db";
import Vehicle from "@/database/models/vehicles";

//! Find all vehicles data
export const findAllVehicles = async () => {
  try {
    await connect();
    const data = await Vehicle.find();
    const vehicles = JSON.parse(JSON.stringify(data));
    return vehicles;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//! Find vehicle by id

export const findVehicleById = async (id) => {
  try {
    await connect();
    const data = await Vehicle.findById(id);
    const vehicle = JSON.parse(JSON.stringify(data));
    return vehicle;
  } catch (error) {
    console.log(error);
    return error;
  }
};
