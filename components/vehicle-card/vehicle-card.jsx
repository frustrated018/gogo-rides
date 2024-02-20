"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { toast } from "sonner";

const VehicleCard = ({ vehicle }) => {
  const { image, name, type, price, rating, brand_name, details } = vehicle;

  return (
    <Card className="mx-auto">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-60 w-60 md:h-72 md:w-72 lg:h-64 lg:w-64 xl:h-[300px] xl:w-[300px]">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain h-full w-full"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <h2>Rating: {rating}</h2>
        <Button
          onClick={() => {
            toast("Details page coming soon");
          }}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;
