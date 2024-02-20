"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

const AddToCart = () => {
  return (
    <>
      <Button
        className="gap-2 text-lg"
        onClick={() => {
          toast.info("Will be adding the cart page soon!");
        }}
      >
        Add to cart <PlusIcon className="h-5 w-5" />
      </Button>
    </>
  );
};

export default AddToCart;
