"use client";
import { Button } from "@/components/ui/button";
import { auth } from "@/firebase/config";
import { PlusIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { RiShoppingCart2Line } from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

const ProtectedLinks = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  //! Protection Function
  const handleProtection = (url) => {
    if (!user) {
      router.push(`/login?from=${url}`);
      toast.error("This is a protected route please login to use this.");
      return;
    }
    router.push(`${url}`);
  };

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => handleProtection("/add")}
              variant="outline"
              size="icon"
            >
              <PlusIcon className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Upload car for sell</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => handleProtection("/cart")}
              variant="outline"
              size="icon"
            >
              <RiShoppingCart2Line className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Cart</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default ProtectedLinks;
