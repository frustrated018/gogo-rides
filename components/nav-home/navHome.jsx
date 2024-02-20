import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import LoginLogout from "./login-logout";
import UserAvatar from "./user-avatar";

//TODO: Did basic responsiveness will turn into sheet if time remains

const NavHome = () => {
  return (
    <header className="bg-background border-b">
      <section className="p-6 flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center">
        <Link href="/" className="text-3xl md:text-xl font-semibold">
          GOGO Rides
        </Link>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
          <Link href="/">Home</Link>
          <Link href="/add">Add Product</Link>
          <Link href="/cart">My Cart</Link>
          <Link href="/vehicles">All Vehicles</Link>
        </div>
        <div className="gap-5 flex items-center">
          <LoginLogout />

          <ThemeToggle />

          <UserAvatar />
        </div>
      </section>
    </header>
  );
};

export default NavHome;
