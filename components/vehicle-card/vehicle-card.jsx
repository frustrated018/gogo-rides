import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const VehicleCard = ({ vehicle }) => {
  const { image, name, type, price, rating, brand_name, details } = vehicle;

  return (
    <Card className="w-80 h-80">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image src={image} alt={name} height={600} width={600} />
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
