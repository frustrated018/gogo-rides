import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function BodyStyle() {
  return (
    <section className="my-10">
      <Card className="max-w-[1300px] mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl uppercase">
            Shop by Body Style
          </CardTitle>
          <CardDescription>
            Select the body style you&apos;re interested in from the options
            below.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 items-center justify-center gap-6 px-4 py-5">
          <Card className="flex flex-col items-start gap-2">
            <Image
              alt="Coupe"
              className="aspect-2/1 object-cover rounded-t-lg overflow-hidden"
              height="200"
              src="https://source.unsplash.com/black-porsche-911-parked-on-gray-pavement-qWYKCdcGFRU"
              width="400"
            />
            <Button className="font-semibold w-3/4 mx-auto mb-2">Exotic</Button>
          </Card>
          <Card className="flex flex-col items-start gap-2">
            <Image
              alt="SUV"
              className="aspect-2/1 object-cover rounded-t-lg overflow-hidden"
              height="200"
              src="https://source.unsplash.com/black-ford-suv-on-road-during-daytime-b0wcV10IQfE"
              width="400"
            />
            <Button className="font-semibold w-3/4 mx-auto mb-2">SUV</Button>
          </Card>
          <Card className="flex flex-col items-start gap-2">
            <Image
              alt="Sedan"
              className="aspect-2/1 object-cover rounded-t-lg overflow-hidden"
              height="200"
              src="https://source.unsplash.com/white-bmw-car-on-street-khYVyHiNZo0"
              width="400"
            />
            <Button className="font-semibold w-3/4 mx-auto mb-2">Sedan</Button>
          </Card>
          <Card className="flex flex-col items-start gap-2">
            <Image
              alt="Convertible"
              className="aspect-2/1 object-cover rounded-t-lg overflow-hidden"
              height="200"
              src="https://source.unsplash.com/grayscale-photo-of-white-porsche-911-mktdFSaJFYo"
              width="400"
            />
            <Button className="font-semibold w-3/4 mx-auto mb-2">
              Convertible
            </Button>
          </Card>
        </CardContent>
      </Card>
    </section>
  );
}
