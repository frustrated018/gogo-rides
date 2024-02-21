import { CardContent, Card } from "@/components/ui/card";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

// Sample data of popular cars
const popularCarsData = [
  {
    name: "1968 Ford Mustang",
    story:
      "Passed down through generations, the '68 Mustang, dubbed 'Legacy's Pride', was sold reluctantly by its owner, Mark, to fund his daughter's education. With a heavy heart, it was auctioned off in 2023. Despite Mark's attachment, the winning bid of $70,000 ensured it found a new home, preserving cherished memories.",
    imageUrl: "https://source.unsplash.com/pink-ford-mustang-U_2kP7bkFKw",
  },
  {
    name: "1971 Chevrolet Camaro",
    story:
      "Named 'Firestorm', this '71 Camaro has a history of igniting passions wherever it goes. Originally purchased by a young couple, it became a symbol of their love. After years of joy rides and road trips, it was meticulously restored by their grandchildren in 2022, honoring the legacy of their grandparents' romance.",
    imageUrl:
      "https://source.unsplash.com/a-blue-and-white-car-parked-on-the-side-of-a-road-GnFG9SpoC5Y",
  },
  {
    name: "1965 Shelby Cobra",
    story:
      "Known as 'The Snake Charmer', this '65 Cobra has a legendary status among racing enthusiasts. Originally owned by a daredevil racer who set records on the tracks, it was later discovered abandoned in a barn. After a painstaking restoration process, it roared back to life, reclaiming its former glory on the roads.",
    imageUrl: "https://source.unsplash.com/a-blue-car-on-a-road-1fDZ4BijtG0",
  },
  {
    name: "1970 Dodge Challenger",
    story:
      "Affectionately called 'Thunderstruck', this '70 Challenger has a thunderous engine that commands attention wherever it goes. Originally owned by a rockstar, it was featured in several music videos before being tucked away in a garage for decades. Recently unearthed, it underwent a full restoration, ready to rock the streets once more.",
    imageUrl:
      "https://source.unsplash.com/green-chevrolet-camaro-on-gray-asphalt-road-during-daytime-qdIUrufLBg4",
  },
];

export default function PopularCarousel() {
  return (
    <section>
      <div className="text-center space-y-3 my-3">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
          Popular Cars Sold
        </h2>
        <h4 className="text-sm md:text-base inline-flex items-center animate-bounce gap-1 md:hidden">
          <ArrowLeftIcon /> Scroll <ArrowRightIcon />
        </h4>
      </div>

      <Carousel
        className="w-[95%] max-w-md mx-auto"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {popularCarsData.map((car, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <Image
                      alt={car.name}
                      className="aspect-16/10 rounded-lg object-cover overflow-hidden"
                      height="250"
                      src={car.imageUrl}
                      width="400"
                    />
                    <div className="border-t border-muted-foreground w-full my-4" />
                    <Card>
                      <CardContent className="p-4 flex flex-col items-center">
                        <h2 className="text-lg font-medium">{car.name}</h2>
                        <p className="text-sm text-balance my-2">{car.story}</p>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
}
