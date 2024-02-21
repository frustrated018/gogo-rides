"use client";
import { addToCart } from "@/actions/cart-actions";
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

  const userEmail = user?.email;
  const vehicleId = pathname.split("/")[2];

  //! Handle Add to cart
  const handleSubmit = async () => {
    if (!user) {
      router.push(`/login?from=${pathname}`);
      toast.error("Please login to add items to your cart");
      return;
    }

    try {
      const res = await addToCart(vehicleId, userEmail);
      toast.success(res.message);
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
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
