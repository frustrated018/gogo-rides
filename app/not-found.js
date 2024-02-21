"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-full min-h-[80vh]">
      <div className="grid gap-4 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl">
            404 Not Found
          </h1>
          <p className="max-w-[600px] mx-auto md:text-xl/relaxed ">
            Oops! The page you are looking for could not be found.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-2 justify-center">
          <Link href="/">
            <Button className="w-40 mx-auto md:mx-0">Home</Button>
          </Link>
          <Button
            onClick={() =>
              toast.info("JUST GO HOME!!", {
                description: "We don't wanna talk to ya!",
              })
            }
            className="w-40 mx-auto md:mx-0"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
