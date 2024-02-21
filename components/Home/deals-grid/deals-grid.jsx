import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const deals = [
  {
    url: "https://source.unsplash.com/orange-supercar-AWjAGG-u_eE",
    title: "Special Financing Offer",
    description: "0% APR for 12 months on selected models",
    buttonText: "Apply Now",
  },
  {
    url: "https://source.unsplash.com/red-ferrari-458-italia-on-road-during-daytime-WTN4tbN_tNQ",
    title: "Limited Time Offer",
    description: "Get a free upgrade to premium features for a limited time",
    buttonText: "Claim Now",
  },
  {
    url: "https://source.unsplash.com/white-lamborghini-aventador-parked-in-building-7_OQMgoGzDw",
    title: "Exclusive Discount",
    description: "Save up to $500 on selected models while stocks last",
    buttonText: "Shop Now",
  },
  {
    url: "https://source.unsplash.com/black-mercedes-benz-car-YApS6TjKJ9c",
    title: "Year-End Clearance",
    description: "Huge discounts available on 2023 models",
    buttonText: "View Deals",
  },
];

const DealsGrid = () => {
  return (
    <section className="my-10 mx-auto max-w-[90%]">
      <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center my-6">
        Deals & Offers
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-5">
        {deals.map((deal, index) => (
          <Card
            key={index}
            className="relative bg-cover bg-center w-full mx-auto"
            style={{
              backgroundImage: `url('${deal.url}')`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-secondary opacity-40"></div>

            <CardHeader className="relative z-20">
              <CardTitle className="text-lg md:text-2xl">
                {deal.title}
              </CardTitle>
              <CardDescription className="text-primary font-semibold text-sm md:text-base">
                {deal.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="relative z-20">
              <Button className="text-sm md:text-base">
                {deal.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </section>
  );
};

export default DealsGrid;
