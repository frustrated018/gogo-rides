"use client";
import { Button } from "@/components/ui/button";
import { auth } from "@/firebase/config";
import { PlusIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "sonner";

const AddToCart = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [user] = useAuthState(auth);

  //! Handle Add to cart
  const handleSubmit = () => {
    if (!user) {
      toast.error("Please login to add items to your cart");
      router.push(`/login?from=${pathname}`);
      return;
    }
    toast.info("Adding add to cart soon");
  };
  return (
    <>
      <Button className="gap-2 text-lg" onClick={handleSubmit}>
        Add to cart <PlusIcon className="h-5 w-5" />
      </Button>
    </>
  );
};

export default AddToCart;
