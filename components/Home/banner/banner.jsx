import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full pt-12">
      <div className="container space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-10 md:grid-cols-2 justify-between items-center">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl xl:text-[3.25rem]">
              Find Your Dream Car
            </h1>
            <p className="text-muted-foreground">
              Explore our wide range of vehicles for sale
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <Input
              className="w-full max-w-[400px] md:w-full"
              placeholder="Search by make, model, or year"
              type="text"
            />
            <Button className="flex items-center justify-center">
              <SearchIcon className="w-5 h-5 mr-2" />
              Search Now
            </Button>
          </div>
        </div>
        <Image
          alt="Hero"
          className="mx-auto aspect-[3/1] overflow-hidden object-cover"
          height="300"
          src="https://source.unsplash.com/black-sedan-FMbWFDiVRPs"
          width="1400"
        />
      </div>
    </section>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
