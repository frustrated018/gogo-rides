import { findVehicleById } from "@/actions/vehicles-actions";
import NavHome from "@/components/nav-home/navHome";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const VehicleDetails = async ({ params }) => {
  let vehicle = [];
  try {
    const res = await findVehicleById(params.id);
    // console.log("Res form client: ", res);
    vehicle = res;
  } catch (error) {
    console.log(error);
  }
  const { image, name, type, price, rating, brand_name, details, owner_name } =
    vehicle;
  return (
    <>
      <NavHome />
      <Card className="mx-auto my-10 flex min-h-[80vh] w-[90%] flex-col md:flex-row">
        <section className="h-[500px] w-full rounded-bl-none rounded-tl-lg rounded-tr-lg bg-secondary md:h-auto md:w-1/2 md:rounded-bl-lg md:rounded-tr-none">
          <div className="relative mx-auto h-full w-full rounded-bl-none rounded-tl-lg rounded-tr-lg md:rounded-bl-lg md:rounded-tr-none">
            <Image
              src={image}
              alt={name}
              fill
              className="h-full w-full rounded-bl-none rounded-tl-lg rounded-tr-lg object-contain md:rounded-bl-lg md:rounded-tr-none"
            />
          </div>
        </section>
        <section className="w-full md:w-1/2">
          <CardHeader>
            <h3 className="text-4xl">{name}</h3>
            <div className="max-w-max rounded-full bg-blue-600 text-white">
              <p className="p-2 font-bold">$ {price} USD</p>
            </div>
          </CardHeader>
          <DropdownMenuSeparator />
          <CardContent className="mt-5 space-y-5 text-muted-foreground">
            <h2>Owner: {owner_name}</h2>
            <h2>Brand: {brand_name}</h2>
            <h2>Type: {type}</h2>
            <h2>Rating: {rating}/5</h2>
            <p>{details}</p>
          </CardContent>
          <CardFooter>
            <Button className="gap-2 text-lg">
              Add to cart <PlusIcon className="h-5 w-5" />
            </Button>
          </CardFooter>
        </section>
      </Card>
    </>
  );
};

export default VehicleDetails;
