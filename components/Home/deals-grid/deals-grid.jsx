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
    description: "0% APR for 12 months on select models",
    buttonText: "Apply Now",
  },
  {
    url: "https://source.unsplash.com/red-ferrari-458-italia-on-road-during-daytime-WTN4tbN_tNQ",
    title: "Limited Time Offer",
    description: "Get a free upgrade to premium features",
    buttonText: "Claim Now",
  },
  {
    url: "https://source.unsplash.com/white-lamborghini-aventador-parked-in-building-7_OQMgoGzDw",
    title: "Exclusive Discount",
    description: "Save up to $500 on select models",
    buttonText: "Shop Now",
  },
  {
    url: "https://source.unsplash.com/white-mercedes-benz-c-class-2h3UGhof_fU",
    title: "Year-End Clearance",
    description: "Huge discounts on 2023 models",
    buttonText: "View Deals",
  },
];

const DealsGrid = () => {
  return (
    <section className="my-10 mx-auto max-w-[90%]">
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-0 gap-y-5">
        {deals.map((deal, index) => (
          <Card
            key={index}
            className="relative bg-cover bg-center h-[300px] w-[300px] mx-auto"
            style={{
              backgroundImage: `url('${deal.url}')`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-secondary opacity-40"></div>

            <CardHeader className="relative z-20">
              <CardTitle className="text-2xl">{deal.title}</CardTitle>
              <CardDescription className="text-primary font-semibold">
                {deal.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="relative z-20">
              <Button>{deal.buttonText}</Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </section>
  );
};

export default DealsGrid;
