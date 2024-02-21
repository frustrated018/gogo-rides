import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function CarNewsletter() {
  return (
    <Card className="relative w-[90%] mx-auto py-12 md:py-24 lg:py-32 xl:py-48 mb-10 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/running-black-porsche-sedan-3ZUsNJhi_Ik')",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-secondary opacity-40 dark:opacity-70 z-0"></div>
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text">
                Find Your Dream Car Today
              </h1>
              <p className="max-w-[600px] md:text-xl mx-auto">
                Subscribe to our newsletter and stay updated with the latest
                listings, deals, and trends in the automotive world.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1 bg-secondary"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button>Subscribe Now</Button>
              </form>
              <p className="text-xs text-white">
                Get ready to find your dream car!{" "}
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
