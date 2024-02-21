import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import UserAvatar from "./user-avatar";
import ProtectedLinks from "./protected-links";
import { Button } from "@/components/ui/button";
import { FaCarSide } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
//TODO: Did basic responsiveness will turn into sheet if time remains

const NavHome = () => {
  return (
    <header className="bg-background border-b">
      <section className="p-6 flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center">
        <Link href="/" className="text-3xl md:text-xl font-semibold">
          GOGO Rides
        </Link>
        <div className="gap-5 flex flex-wrap items-center">
          {/* //! All Vehicles Button */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/vehicles">
                  <Button variant="outline" size="icon">
                    <FaCarSide className="size-5" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>All Vehicles</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <ProtectedLinks />

          <ThemeToggle />

          <UserAvatar />
        </div>
      </section>
    </header>
  );
};

export default NavHome;
